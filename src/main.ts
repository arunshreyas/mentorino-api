import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { DataInterceptor } from './common/interceptors/data-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  app.use((req, res, next) => {
    const start = Date.now();
    const timestamp = new Date().toISOString();

    logger.log(`[${timestamp}] ${req.method} ${req.url} - Request started`);

    if (['POST', 'PUT', 'PATCH'].includes(req.method) && req.body) {
      const sanitizedBody = { ...req.body };
      if (sanitizedBody.password) sanitizedBody.password = '[REDACTED]';
      if (sanitizedBody.currentPassword) sanitizedBody.currentPassword = '[REDACTED]';
      if (sanitizedBody.newPassword) sanitizedBody.newPassword = '[REDACTED]';
      logger.log(`[${timestamp}] Request body: ${JSON.stringify(sanitizedBody)}`);
    }

    if (req.url.includes('/auth/')) {
      const authHeader = req.headers.authorization;
      logger.log(`[${timestamp}] Auth header: ${authHeader ? '[TOKEN_PRESENT]' : '[NO_TOKEN]'}`);
    }

    res.on('finish', () => {
      const duration = Date.now() - start;
      logger.log(`[${timestamp}] ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
    });

    next();
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new DataInterceptor());
  app.useGlobalGuards(app.get(ThrottlerGuard));

  const corsOrigin = configService.get<string>('CORS_ORIGIN') ?? 'http://localhost:3000';
  app.enableCors({
    origin: corsOrigin.split(',').map((origin) => origin.trim()),
    credentials: true,
  });

  app.use((req, res, next) => {
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    next();
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);

  logger.log(`Mentorino API server running on port ${port}`);
  logger.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.log(`CORS origin: ${corsOrigin}`);
  logger.log('Security headers enabled');
  logger.log('Rate limiting enabled');
  logger.log('Request logging enabled');
}

bootstrap();

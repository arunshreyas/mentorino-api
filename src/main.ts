import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { DataInterceptor } from './common/interceptors/data-interceptor';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  // Request logging middleware
  app.use((req, res, next) => {
    const start = Date.now();
    const timestamp = new Date().toISOString();
    
    logger.log(`[${timestamp}] ${req.method} ${req.url} - Request started`);
    
    // Log request body for POST/PUT requests (excluding sensitive data)
    if (['POST', 'PUT', 'PATCH'].includes(req.method) && req.body) {
      const sanitizedBody = { ...req.body };
      if (sanitizedBody.password) sanitizedBody.password = '[REDACTED]';
      if (sanitizedBody.currentPassword) sanitizedBody.currentPassword = '[REDACTED]';
      if (sanitizedBody.newPassword) sanitizedBody.newPassword = '[REDACTED]';
      logger.log(`[${timestamp}] Request body: ${JSON.stringify(sanitizedBody)}`);
    }

    // Log headers for auth requests
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

  // Global validation pipe
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

  // Global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Global data interceptor
  app.useGlobalInterceptors(new DataInterceptor());

  // Global throttler guard
  app.useGlobalGuards(app.get(ThrottlerGuard));

  // CORS
  app.enableCors({
    origin: configService.get<string>('CORS_ORIGIN') || '*',
    credentials: true,
  });

  // Security headers
  app.use((req, res, next) => {
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    next();
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  
  logger.log(`🚀 Mentorino API Server running on port ${port}`);
  logger.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.log(`🔗 CORS Origin: ${configService.get<string>('CORS_ORIGIN') || '*'}`);
  logger.log(`🛡️  Security headers enabled`);
  logger.log(`⚡ Rate limiting enabled`);
  logger.log(`📝 Request logging enabled`);
}
bootstrap();

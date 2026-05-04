import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';
import { ProfilesModule } from './profiles/profiles.module';
import { BookingsModule } from './bookings/bookings.module';
import { TaskActivitiesModule } from './task-activities/task-activities.module';
import { EventsModule } from './events/events.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 60 seconds
        limit: 10, // 10 requests per 60 seconds
      },
      {
        ttl: 60000,
        limit: 5, // Stricter limit for auth routes
        name: 'auth',
      },
    ]),
    ApplicationsModule,
    ProfilesModule,
    BookingsModule,
    TaskActivitiesModule,
    EventsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

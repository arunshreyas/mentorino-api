import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [EmailModule, PaymentModule],
  exports: [EmailModule, PaymentModule],
})
export class IntegrationPlaceholdersModule {}

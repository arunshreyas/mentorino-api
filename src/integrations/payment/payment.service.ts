import { Injectable, ServiceUnavailableException } from '@nestjs/common';

export type PaymentProvider = 'stripe' | 'razorpay';
export type PlaceholderPaymentOutcome = 'success' | 'failure';

export interface CheckoutRequest {
  userId: string;
  sessionId?: number;
  amountCents: number;
  currency: string;
  provider?: PaymentProvider;
}

export interface CheckoutIntent {
  provider: PaymentProvider | 'unconfigured';
  status: 'provider_not_configured';
  amountCents: number;
  currency: string;
  metadata: Record<string, unknown>;
}

@Injectable()
export class PaymentService {
  createCheckoutIntent(request: CheckoutRequest): CheckoutIntent {
    this.assertValidMoney(request.amountCents, request.currency);

    return {
      provider: request.provider ?? 'unconfigured',
      status: 'provider_not_configured',
      amountCents: request.amountCents,
      currency: request.currency.toUpperCase(),
      metadata: {
        userId: request.userId,
        sessionId: request.sessionId,
      },
    };
  }

  recordPlaceholderOutcome(_outcome: PlaceholderPaymentOutcome): never {
    // TODO: Replace with Stripe/Razorpay webhook handling. This method is only a
    // typed seam for future success/failure mapping and must not move money.
    throw new ServiceUnavailableException('Payment provider is not configured');
  }

  private assertValidMoney(amountCents: number, currency: string) {
    if (!Number.isInteger(amountCents) || amountCents <= 0) {
      throw new ServiceUnavailableException('Payment amount must be a positive integer in cents');
    }
    if (!/^[A-Z]{3}$/i.test(currency)) {
      throw new ServiceUnavailableException('Currency must be a valid three-letter code');
    }
  }
}

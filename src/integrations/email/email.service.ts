import { Injectable, ServiceUnavailableException } from '@nestjs/common';

export type EmailTemplateName =
  | 'booking-confirmation'
  | 'mentor-approved'
  | 'mentor-rejected'
  | 'session-reminder';

export interface EmailMessage {
  to: string;
  subject: string;
  template: EmailTemplateName;
  data: Record<string, unknown>;
}

@Injectable()
export class EmailService {
  buildBookingConfirmation(to: string, data: Record<string, unknown>): EmailMessage {
    return {
      to,
      subject: 'Your mentor session is confirmed',
      template: 'booking-confirmation',
      data,
    };
  }

  buildMentorApproval(to: string, approved: boolean, data: Record<string, unknown>): EmailMessage {
    return {
      to,
      subject: approved ? 'Your mentor profile was approved' : 'Your mentor profile was not approved',
      template: approved ? 'mentor-approved' : 'mentor-rejected',
      data,
    };
  }

  buildSessionReminder(to: string, data: Record<string, unknown>): EmailMessage {
    return {
      to,
      subject: 'Upcoming mentor session reminder',
      template: 'session-reminder',
      data,
    };
  }

  async send(_message: EmailMessage): Promise<never> {
    // TODO: Connect Resend/SMTP after domain, API key, and sender identity are configured.
    throw new ServiceUnavailableException('Email provider is not configured');
  }
}

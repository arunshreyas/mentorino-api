import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataInterceptor<T> implements NestInterceptor<T, T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    return next.handle().pipe(
      map((data) => {
        // Remove sensitive fields from response
        if (Array.isArray(data)) {
          return data.map(item => this.removeSensitiveFields(item));
        }
        return this.removeSensitiveFields(data);
      }),
    );
  }

  private removeSensitiveFields(data: any): any {
    if (!data || typeof data !== 'object') {
      return data;
    }

    const sensitiveFields = ['password', 'token', 'secret', 'key'];
    const cleaned = { ...data };

    sensitiveFields.forEach(field => {
      if (field in cleaned) {
        delete cleaned[field];
      }
    });

    return cleaned;
  }
}

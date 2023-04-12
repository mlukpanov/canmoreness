import { Subjects, Publisher, PaymentCreatedEvent } from '@mlcommon/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

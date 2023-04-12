import { Publisher, OrderCancelledEvent, Subjects } from '@mlcommon/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}
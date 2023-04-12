import { Publisher, OrderCreatedEvent, Subjects } from '@mlcommon/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}
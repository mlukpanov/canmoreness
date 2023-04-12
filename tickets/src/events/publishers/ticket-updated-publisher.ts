import { Publisher, Subjects, TicketUpdatedEvent } from '@mlcommon/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

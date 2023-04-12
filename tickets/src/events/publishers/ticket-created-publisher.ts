import { Publisher, Subjects, TicketCreatedEvent } from '@mlcommon/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

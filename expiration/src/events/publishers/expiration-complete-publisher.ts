import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@mlcommon/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}

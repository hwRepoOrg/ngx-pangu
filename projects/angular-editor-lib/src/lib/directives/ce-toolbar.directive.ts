import { Directive } from '@angular/core';

@Directive({
  selector: '[ceToolbar]',
  exportAs: 'ceToolbar',
})
export class CeToolbarDirective {
  constructor() {}
}

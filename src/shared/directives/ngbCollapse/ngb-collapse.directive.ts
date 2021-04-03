import { Directive } from '@angular/core';

@Directive({
  selector: '[appNgbCollapse]'
})
export class NgbCollapseDirective {
  public isMenuCollapsed = true;

  constructor() { }

}

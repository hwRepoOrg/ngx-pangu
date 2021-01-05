import { Component, HostBinding, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ITabConfig, IWidget } from '../../store';

@Component({
  selector: 'ce-left-side,[ceLeftSide]',
  exportAs: 'ceLeftSide',
  templateUrl: 'left-side.component.html',
  styleUrls: ['left-side.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class LeftSideComponent implements OnInit {
  @Input()
  tabs: ITabConfig[];
  @Input()
  widgets: IWidget[] = [];
  public activeIndex = 0;
  @HostBinding('class.collapsed')
  public collapsed = false;

  constructor() {}

  ngOnInit(): void {}

  isTemplateType(content: any) {
    return content instanceof TemplateRef;
  }

  switchPane(index: number) {
    this.activeIndex = index;
    this.collapsed = false;
  }
}

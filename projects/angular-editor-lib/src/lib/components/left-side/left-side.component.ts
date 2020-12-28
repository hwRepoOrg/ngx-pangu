import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ce-left-side',
  exportAs: 'ceLeftSide',
  templateUrl: 'left-side.component.html',
  styleUrls: ['left-side.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class LeftSideComponent implements OnInit {
  public activeIndex = 0;
  @HostBinding('class.collapsed')
  public collapsed = false;

  constructor() {}

  ngOnInit(): void {}
}

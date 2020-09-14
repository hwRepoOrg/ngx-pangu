import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'ce-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.less'],
})
export class LeftSideComponent implements OnInit {
  public activeIndex = 0;
  @HostBinding('class.collapsed')
  public collapsed = false;

  constructor() {}

  ngOnInit(): void {}
}

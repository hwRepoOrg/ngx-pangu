import { Component, Host, HostBinding, Input, OnInit } from '@angular/core';
import { INode } from 'src/app/store/store';

@Component({
  selector: 'ce-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.less'],
})
export class BoxItemComponent implements OnInit {
  @Input()
  public node: INode;

  @HostBinding('style.left.px')
  get left(): number {
    return this.node.left;
  }
  @HostBinding('style.top.px')
  get top(): number {
    return this.node.top;
  }
  @HostBinding('style.width.px')
  get width(): number {
    return this.node.width;
  }
  @HostBinding('style.height.px')
  get height(): number {
    return this.node.height;
  }
  @HostBinding('style.border-style')
  get borderStyle(): string {
    return this.node.borderStyle;
  }
  @HostBinding('style.border-color')
  get borderColor(): string {
    return this.node.borderColor;
  }
  @HostBinding('style.border-width.px')
  get borderWidth(): number {
    return this.node.borderWidth;
  }
  @HostBinding('style.transform')
  get transform(): string {
    return `rotate(${this.node.rotate}deg)`;
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { INode } from 'src/app/store/store';

@Component({
  selector: 'ce-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.less'],
})
export class BoxItemComponent implements OnInit {
  @Input()
  public node: INode;

  @HostBinding('id')
  get id(): string {
    return this.node?.id && `box-item-${this.node?.id}`;
  }

  @HostBinding('style.transform')
  get transform(): string {
    return `translateX(${this.node.left.precision(10)}px) translateY(${this.node.top.precision(10)}px) translateZ(0) rotate(${
      this.node.rotate?.precision(10) ?? 0
    }deg)`;
  }

  @HostBinding('style.width.px')
  get width(): number {
    return this.node.width.precision(10);
  }
  @HostBinding('style.height.px')
  get height(): number {
    return this.node.height.precision(10);
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
    return this.node.borderWidth?.precision(10);
  }

  @HostBinding('style.z-index')
  get zIndex(): number {
    return this.node.zIndex;
  }

  @HostBinding('style.background')
  get background(): SafeStyle {
    return `${this.node.backgroundRepeat ?? ''} ${this.node.backgroundPosition ?? ''} url(${this.node.backgroundImage ?? ''}) ${
      this.node.backgroundColor ?? ''
    }`
      .trim()
      .replace(/^url\(\)$/, '');
  }

  constructor() {}

  ngOnInit(): void {}
}

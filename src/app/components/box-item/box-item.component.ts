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
    return `translateX(${this.node.left}px) translateY(${this.node.top}px) translateZ(0) rotate(${this.node.rotate ?? 0}deg)`;
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

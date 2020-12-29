import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { INode } from '../../store';

@Component({
  selector: 'ce-box-item',
  templateUrl: 'box-item.component.html',
  styleUrls: ['box-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class BoxItemComponent {
  @Input()
  public node: INode;

  @HostBinding('id')
  get id(): string {
    return this.node?.id && `box-item-${this.node?.id}`;
  }

  @HostBinding('style.left.px')
  get nodeLeft() {
    return this.node.left;
  }

  @HostBinding('style.top.px')
  get nodeTop() {
    return this.node.top;
  }

  @HostBinding('style.transform')
  get transform(): string {
    return `rotate(${+this.node?.rotate ?? 0}deg)`;
  }

  @HostBinding('style.width.px')
  get width(): number {
    return +this.node.width.toFixed(10);
  }
  @HostBinding('style.height.px')
  get height(): number {
    return +this.node.height.toFixed(10);
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
    return +this.node.borderWidth?.toFixed(10);
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
}

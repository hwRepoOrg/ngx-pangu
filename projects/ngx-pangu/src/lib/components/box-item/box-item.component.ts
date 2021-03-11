import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { INode } from '../../store';

@Component({
  selector: 'ce-box-item',
  templateUrl: 'box-item.component.html',
  styleUrls: ['box-item.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxItemComponent<T = any> implements AfterViewInit {
  private _node: INode<T>;
  @Input()
  get node(): INode<T> {
    return this._node;
  }
  set node(val: INode<T>) {
    this._node = val;
    this.generatorStyles();
  }

  constructor(private renderer: Renderer2, private eleRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.generatorStyles();
  }

  private generatorStyles() {
    if (this.eleRef.nativeElement) {
      this.renderer.setAttribute(this.eleRef.nativeElement, 'id', `box-item-${this.node.id}`);
      this.renderer.setStyle(this.eleRef.nativeElement, 'width', `${this.node.width}px`);
      this.renderer.setStyle(this.eleRef.nativeElement, 'height', `${this.node.height}px`);
      this.renderer.setStyle(this.eleRef.nativeElement, 'left', `${this.node.left}px`);
      this.renderer.setStyle(this.eleRef.nativeElement, 'top', `${this.node.top}px`);
      this.renderer.setStyle(this.eleRef.nativeElement, 'transform', `translate3d(0,0,0) rotate(${this.node.rotate ?? 0}deg)`);
      this.renderer.setStyle(this.eleRef.nativeElement, 'border-style', this.node.borderStyle);
      this.renderer.setStyle(this.eleRef.nativeElement, 'border-color', this.node.borderColor);
      this.renderer.setStyle(this.eleRef.nativeElement, 'border-width', `${this.node.borderWidth}px`);
      this.renderer.setStyle(this.eleRef.nativeElement, 'z-index', this.node.zIndex);
      this.renderer.setStyle(this.eleRef.nativeElement, 'background-image', this.node.backgroundImage);
      this.renderer.setStyle(this.eleRef.nativeElement, 'background-position', this.node.backgroundPosition);
      this.renderer.setStyle(this.eleRef.nativeElement, 'background-repeat', this.node.backgroundRepeat);
      this.renderer.setStyle(this.eleRef.nativeElement, 'background-size', this.node.backgroundSize);
      this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.node.backgroundColor);
    }
  }
}

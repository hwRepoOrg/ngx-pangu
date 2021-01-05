import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ce-right-side,[ceRightSide]',
  exportAs: 'ceRightSide',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSideComponent {
  @HostBinding('style.left.px')
  public left = window.innerWidth - 430;
  @HostBinding('style.top.px')
  public top = 30;
  public isOpen = false;
  private prevPosition: [number, number];
  constructor() {
    this.prevPosition = [this.left, this.top];
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  onStart() {
    this.prevPosition = [this.left, this.top];
  }

  onMove(event: MouseEvent) {
    this.left += event.movementX;
    this.top += event.movementY;
  }

  onStop() {
    const [left, top] = this.prevPosition;
    if (left === this.left && top === this.top) {
      this.toggleOpen();
    }
  }
}

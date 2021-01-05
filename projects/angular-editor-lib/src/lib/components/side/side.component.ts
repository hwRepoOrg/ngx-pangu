import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { CeUtilsService } from '../../services';
import { ITabConfig } from '../../store';

export type DEFAULT_TABS = 'LAYERS' | 'WIDGETS' | 'CANVAS_SETTINGS' | 'BASE_WIDGETS_SETTINGS';
@Component({
  selector: 'ce-side,[ceSide]',
  exportAs: 'ceRightSide',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideComponent {
  @HostBinding('style.left.px')
  public left = window.innerWidth - 430;
  @HostBinding('style.top.px')
  public top = 30;
  @Input()
  public tabs: ITabConfig[];
  @Input()
  disabledTabs: DEFAULT_TABS[];
  public isOpen = false;
  public activeIndex: string = 'WIDGETS';
  private prevPosition: [number, number];
  constructor(public utilSrv: CeUtilsService) {
    this.prevPosition = [this.left, this.top];
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  switchPane(index: string) {
    this.activeIndex = index;
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

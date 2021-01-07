import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CeUtilsService } from '../../services';
import { IPanel } from '../../store';

@Component({
  selector: 'ce-panel,[cePanel]',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class PanelComponent<T> {
  private _panel: IPanel<T>;

  @Input()
  set panel(val: IPanel<T>) {
    this._panel = val;
    this.panelChange.emit(val);
  }
  get panel(): IPanel<T> {
    return this._panel;
  }
  @Output() panelChange = new EventEmitter<IPanel<T>>();
  constructor(public utils: CeUtilsService) {}

  updatePosition(event: CdkDragEnd) {
    this.panel = { ...this.panel, x: this.panel.x + event.distance.x, y: this.panel.y + event.distance.y };
  }

  close() {
    this.panel = { ...this.panel, show: false };
  }
}

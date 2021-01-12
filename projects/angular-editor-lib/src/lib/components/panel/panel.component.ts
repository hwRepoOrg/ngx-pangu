import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CeUtilsService, EditorStore } from '../../services';
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
  }
  get panel(): IPanel<T> {
    return this._panel;
  }
  constructor(public utils: CeUtilsService, public store: EditorStore) {}

  updatePosition(event: CdkDragEnd) {
    this.panel = { ...this.panel, x: this.panel.x + event.distance.x, y: this.panel.y + event.distance.y };
  }

  toggleCollapsed() {
    this.store.togglePanelCollapsed(this.panel.key);
  }

  close() {
    this.store.togglePanelVisible(this.panel.key);
  }
}

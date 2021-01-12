import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BehaviorSubject } from 'rxjs';
import { filter, map, pairwise, startWith } from 'rxjs/operators';
import { LayerTreeComponent, PropertyFormComponent, WidgetListComponent } from '../components';
import { DEFAULT_STORE, IPanel, IStore } from '../store';
import { CeUtilsService } from './utils.service';

@Injectable()
export class EditorStore<T = any> extends ComponentStore<IStore<T>> {
  private _defaultPanels: IPanel<any>[] = [
    { key: 'LAYERS', title: '图层', content: LayerTreeComponent, show: true, x: 10, y: 60 },
    { key: 'WIDGET_LIST', title: '组件', content: WidgetListComponent, show: false, x: 50, y: 60 },
    { key: 'PROPERTIES', title: '属性', content: PropertyFormComponent, show: true, x: window.innerWidth - 350, y: 60 },
  ];
  private panels: IPanel[] = [];
  panels$ = new BehaviorSubject<IPanel[]>([...this._defaultPanels, ...this.panels]);

  constructor(private utils: CeUtilsService) {
    super(DEFAULT_STORE);
  }

  initialize(state: IStore<T>) {
    this.setState(state);
  }

  dispatch(action: (state: IStore<T>) => IStore<T>) {
    this.setState(action);
  }

  selectDifferent<R>(cb: (state: IStore<T>) => R) {
    return this.select(cb).pipe(
      startWith(0, 0),
      pairwise<R>(),
      filter(([prev, present]) => !this.utils.isDeepEqual(prev, present)),
      map(([, present]) => present)
    );
  }

  toJSON() {
    const state = this.get();
    return JSON.stringify({
      canvasPosition: state.canvasPosition,
      canvasSize: state.canvasSize,
      canvasBackground: state.canvasBackground,
      nodes: state.nodes,
      selected: state.selected,
      bordered: state.bordered,
    });
  }

  addPanels(panels: IPanel[]) {
    this.panels = [...this.panels, ...panels];
    this.panels$.next([...this._defaultPanels, ...this.panels]);
  }

  getPanel(key: string) {
    return [...this._defaultPanels, ...this.panels].find((panel) => panel.key === key);
  }

  togglePanelVisible(key: string) {
    [...this._defaultPanels, ...this.panels].forEach((panel) => {
      if (panel.key === key) {
        panel.show = !panel.show;
      }
    });
    this.panels$.next([...this._defaultPanels, ...this.panels]);
  }

  togglePanelCollapsed(key: string) {
    [...this._defaultPanels, ...this.panels].forEach((panel) => {
      if (panel.key === key) {
        panel.collapsed = !panel.collapsed;
      }
    });
    this.panels$.next([...this._defaultPanels, ...this.panels]);
  }
}

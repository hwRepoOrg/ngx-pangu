import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { AngularEditorLibComponent } from './angular-editor-lib.component';
import { BorderedAreaComponent } from './components/bordered-area/bordered-area.component';
import { BoxItemComponent } from './components/box-item/box-item.component';
import { CanvasBackgroundComponent } from './components/canvas-background/canvas-background.component';
import { CanvasGridComponent } from './components/canvas-grid/canvas-grid.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { LayerTreeComponent } from './components/layer-tree/layer-tree.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { ResizeHandleComponent } from './components/resize-handle/resize-handle.component';
import { RotateHandleComponent } from './components/rotate-handle/rotate-handle.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WidgetListComponent } from './components/widget-list/widget-list.component';
import { DraggableDirective } from './directives/draggable.directive';
import { NoZoomAreaDirective } from './directives/no-zoom-area.directive';
import { SelectorDirective } from './directives/selector.directive';
import { ZoomAreaDirective } from './directives/zoom-area.directive';
import reducers from './store/reducers';
import { IStore } from './store/store';

const ANTD_MODULES = [NzCardModule, NzIconModule.forRoot([]), NzButtonModule, NzInputNumberModule, NzTabsModule, NzTreeModule, NzDropDownModule];

const COMPONENTS = [
  ToolbarComponent,
  LeftSideComponent,
  LayerTreeComponent,
  WidgetListComponent,
  CanvasComponent,
  CanvasGridComponent,
  CanvasBackgroundComponent,
  BoxItemComponent,
  ResizeHandleComponent,
  RotateHandleComponent,
  BorderedAreaComponent,
];

const DIRECTIVES = [NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective];

@NgModule({
  declarations: [AngularEditorLibComponent, ...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, BrowserAnimationsModule, FormsModule, StoreModule.forRoot<IStore>(reducers), ...ANTD_MODULES],
  exports: [AngularEditorLibComponent],
})
export class AngularEditorLibModule {
  constructor(private injector: Injector) {
    this.injector.get(NzIconService).fetchFromIconfont({ scriptUrl: 'https://at.alicdn.com/t/font_1310204_o45rx1m46mn.js' });
  }
}

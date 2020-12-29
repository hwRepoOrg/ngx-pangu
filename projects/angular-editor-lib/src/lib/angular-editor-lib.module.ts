import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DeleteOutline,
  FolderFill,
  FolderOpenFill,
  FolderOpenOutline,
  FolderOutline,
  LockOutline,
  UnlockOutline,
} from '@ant-design/icons-angular/icons';
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
import { CeToolbarDirective } from './directives';
import { DraggableDirective } from './directives/draggable.directive';
import { NoZoomAreaDirective } from './directives/no-zoom-area.directive';
import { SelectorDirective } from './directives/selector.directive';
import { ZoomAreaDirective } from './directives/zoom-area.directive';
import { ActionsService } from './services';
import { EditorStore } from './services/store.service';

const ICONS = [DeleteOutline, LockOutline, UnlockOutline, FolderOutline, FolderFill, FolderOpenFill, FolderOpenOutline];

const ANTD_MODULES = [NzCardModule, NzIconModule.forRoot(ICONS), NzButtonModule, NzInputNumberModule, NzTabsModule, NzTreeModule, NzDropDownModule];

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
  AngularEditorLibComponent,
];

const DIRECTIVES = [NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective];
const SERVICES = [ActionsService, EditorStore];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ...ANTD_MODULES],
  exports: [...COMPONENTS, ...DIRECTIVES],
  providers: [...SERVICES],
})
export class AngularEditorLibModule {
  constructor(private injector: Injector) {
    this.injector.get(NzIconService).fetchFromIconfont({ scriptUrl: 'https://at.alicdn.com/t/font_1310204_o45rx1m46mn.js' });
  }
}

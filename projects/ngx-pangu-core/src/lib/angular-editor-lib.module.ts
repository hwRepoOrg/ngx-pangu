import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorLibComponent } from './angular-editor-lib.component';
import {
  BorderedAreaComponent,
  BoxItemComponent,
  CanvasBackgroundComponent,
  CanvasComponent,
  CanvasFormsComponent,
  CanvasGridComponent,
  LayerTreeComponent,
  PanelComponent,
  PropertyFormComponent,
  ResizeHandleComponent,
  RotateHandleComponent,
  ToolbarComponent,
  WidgetFormComponent,
  WidgetListComponent,
} from './components';
import { CeToolbarDirective, DraggableDirective, NoZoomAreaDirective, SelectorDirective, ZoomAreaDirective } from './directives';
import { NgZorroModule } from './ng-zorro.module';

const CDK_MODULES = [DragDropModule];

const FORMS_COMPONENT = [CanvasFormsComponent, WidgetFormComponent];

const COMPONENTS = [
  ToolbarComponent,
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
  PanelComponent,
  PropertyFormComponent,
];

const DIRECTIVES = [NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective];

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgZorroModule, ...CDK_MODULES],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...FORMS_COMPONENT],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class AngularEditorLibModule {}

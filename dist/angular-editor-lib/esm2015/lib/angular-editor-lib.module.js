import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorLibComponent } from './angular-editor-lib.component';
import { BorderedAreaComponent, BoxItemComponent, CanvasBackgroundComponent, CanvasComponent, CanvasFormsComponent, CanvasGridComponent, LayerTreeComponent, PanelComponent, PropertyFormComponent, ResizeHandleComponent, RotateHandleComponent, ToolbarComponent, WidgetFormComponent, WidgetListComponent, } from './components';
import { CeToolbarDirective, DraggableDirective, NoZoomAreaDirective, SelectorDirective, ZoomAreaDirective } from './directives';
import { NgZorroModule } from './ng-zorro.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export class AngularEditorLibModule {
}
AngularEditorLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: AngularEditorLibModule });
AngularEditorLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AngularEditorLibModule_Factory(t) { return new (t || AngularEditorLibModule)(); }, imports: [[CommonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgZorroModule, ...CDK_MODULES]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularEditorLibModule, { declarations: [ToolbarComponent,
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
        PropertyFormComponent, NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective, CanvasFormsComponent, WidgetFormComponent], imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgZorroModule, DragDropModule], exports: [ToolbarComponent,
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
        PropertyFormComponent, NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AngularEditorLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgZorroModule, ...CDK_MODULES],
                declarations: [...COMPONENTS, ...DIRECTIVES, ...FORMS_COMPONENT],
                exports: [...COMPONENTS, ...DIRECTIVES],
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(ResizeHandleComponent, [i1.NgIf, RotateHandleComponent, DraggableDirective], [i1.AsyncPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3ItbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVkaXRvci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZWRpdG9yLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGdCQUFnQixFQUNoQix5QkFBeUIsRUFDekIsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFFbEQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVyQyxNQUFNLGVBQWUsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFFcEUsTUFBTSxVQUFVLEdBQUc7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QscUJBQXFCO0NBQ3RCLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFPdkgsTUFBTSxPQUFPLHNCQUFzQjs7MERBQXRCLHNCQUFzQjsySEFBdEIsc0JBQXNCLGtCQUp4QixDQUFDLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLEdBQUcsV0FBVyxDQUFDO3dGQUl4SCxzQkFBc0IsbUJBdEJqQyxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxxQkFBcUIsRUFHSCxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFsQjVGLG9CQUFvQixFQUFFLG1CQUFtQixhQXFCdEQsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBdkIvRixjQUFjLGFBS2pDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLHFCQUFxQixFQUdILG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQjtrREFPeEcsc0JBQXNCO2NBTGxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxHQUFHLFdBQVcsQ0FBQztnQkFDbkksWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxVQUFVLEVBQUUsR0FBRyxlQUFlLENBQUM7Z0JBQ2hFLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUcsVUFBVSxDQUFDO2FBQ3hDOzt1QkFkQyxxQkFBcUIsWUFDckIscUJBQXFCLEVBT3FDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFuZ3VsYXJFZGl0b3JMaWJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItZWRpdG9yLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQm9yZGVyZWRBcmVhQ29tcG9uZW50LFxuICBCb3hJdGVtQ29tcG9uZW50LFxuICBDYW52YXNCYWNrZ3JvdW5kQ29tcG9uZW50LFxuICBDYW52YXNDb21wb25lbnQsXG4gIENhbnZhc0Zvcm1zQ29tcG9uZW50LFxuICBDYW52YXNHcmlkQ29tcG9uZW50LFxuICBMYXllclRyZWVDb21wb25lbnQsXG4gIFBhbmVsQ29tcG9uZW50LFxuICBQcm9wZXJ0eUZvcm1Db21wb25lbnQsXG4gIFJlc2l6ZUhhbmRsZUNvbXBvbmVudCxcbiAgUm90YXRlSGFuZGxlQ29tcG9uZW50LFxuICBUb29sYmFyQ29tcG9uZW50LFxuICBXaWRnZXRGb3JtQ29tcG9uZW50LFxuICBXaWRnZXRMaXN0Q29tcG9uZW50LFxufSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ2VUb29sYmFyRGlyZWN0aXZlLCBEcmFnZ2FibGVEaXJlY3RpdmUsIE5vWm9vbUFyZWFEaXJlY3RpdmUsIFNlbGVjdG9yRGlyZWN0aXZlLCBab29tQXJlYURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBOZ1pvcnJvTW9kdWxlIH0gZnJvbSAnLi9uZy16b3Jyby5tb2R1bGUnO1xuXG5jb25zdCBDREtfTU9EVUxFUyA9IFtEcmFnRHJvcE1vZHVsZV07XG5cbmNvbnN0IEZPUk1TX0NPTVBPTkVOVCA9IFtDYW52YXNGb3Jtc0NvbXBvbmVudCwgV2lkZ2V0Rm9ybUNvbXBvbmVudF07XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIFRvb2xiYXJDb21wb25lbnQsXG4gIExheWVyVHJlZUNvbXBvbmVudCxcbiAgV2lkZ2V0TGlzdENvbXBvbmVudCxcbiAgQ2FudmFzQ29tcG9uZW50LFxuICBDYW52YXNHcmlkQ29tcG9uZW50LFxuICBDYW52YXNCYWNrZ3JvdW5kQ29tcG9uZW50LFxuICBCb3hJdGVtQ29tcG9uZW50LFxuICBSZXNpemVIYW5kbGVDb21wb25lbnQsXG4gIFJvdGF0ZUhhbmRsZUNvbXBvbmVudCxcbiAgQm9yZGVyZWRBcmVhQ29tcG9uZW50LFxuICBBbmd1bGFyRWRpdG9yTGliQ29tcG9uZW50LFxuICBQYW5lbENvbXBvbmVudCxcbiAgUHJvcGVydHlGb3JtQ29tcG9uZW50LFxuXTtcblxuY29uc3QgRElSRUNUSVZFUyA9IFtOb1pvb21BcmVhRGlyZWN0aXZlLCBab29tQXJlYURpcmVjdGl2ZSwgRHJhZ2dhYmxlRGlyZWN0aXZlLCBTZWxlY3RvckRpcmVjdGl2ZSwgQ2VUb29sYmFyRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBOZ1pvcnJvTW9kdWxlLCAuLi5DREtfTU9EVUxFU10sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLkRJUkVDVElWRVMsIC4uLkZPUk1TX0NPTVBPTkVOVF0sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTLCAuLi5ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvckxpYk1vZHVsZSB7fVxuIl19
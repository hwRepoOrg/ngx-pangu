import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { BorderedAreaComponent } from './components/bordered-area/bordered-area.component';
import { BoxItemComponent } from './components/box-item/box-item.component';
import { CanvasBackgroundComponent } from './components/canvas-background/canvas-background.component';
import { CanvasGridComponent } from './components/canvas-grid/canvas-grid.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { LayerTreeComponent } from './components/layer-tree/layer-tree.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { ResizeHandleComponent } from './components/resize-handle/resize-handle.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WidgetListComponent } from './components/widget-list/widget-list.component';
import { DraggableDirective } from './directives/draggable.directive';
import { NoZoomAreaDirective } from './directives/no-zoom-area.directive';
import { SelectorDirective } from './directives/selector.directive';
import { ZoomAreaDirective } from './directives/zoom-area.directive';
import reducers from './store/reducers';
import { IStore } from './store/store';

registerLocaleData(zh);

const ANTD_MODULES = [NzCardModule, NzIconModule.forRoot([]), NzButtonModule, NzInputNumberModule, NzTabsModule];

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
  BorderedAreaComponent,
];
const DIRECTIVES = [NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<IStore>(reducers),
    FormsModule,
    HttpClientModule,
    ...ANTD_MODULES,
  ],
  declarations: [AppComponent, ...COMPONENTS, ...DIRECTIVES],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_CONFIG, useFactory: () => ({ icon: { nzTheme: 'outline' } } as NzConfig) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    if (!environment.production) {
      if (document.querySelector('body>svg')) {
        document.body.removeChild(document.querySelector('body>svg'));
      }
      if (document.querySelector(`script[src="${environment.iconUrl}"]`)) {
        document.body.removeChild(document.querySelector(`script[src="${environment.iconUrl}"]`));
      }
    }
    this.injector.get(NzIconService).fetchFromIconfont({ scriptUrl: environment.iconUrl });
  }
}

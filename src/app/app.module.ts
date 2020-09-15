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
import { LayerTreeComponent } from './components/layer-tree/layer-tree.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WidgetListComponent } from './components/widget-list/widget-list.component';
import { canvasStateReducer, nodesReducer } from './store/reducers';
import { IStore } from './store/store';

registerLocaleData(zh);

const ANTD_MODULES = [NzCardModule, NzIconModule.forRoot([]), NzButtonModule, NzInputNumberModule, NzTabsModule];

const COMPONENTS = [ToolbarComponent];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<IStore>({ nodes: nodesReducer, canvasState: canvasStateReducer }),
    FormsModule,
    HttpClientModule,
    ...ANTD_MODULES,
  ],
  declarations: [AppComponent, ...COMPONENTS, LeftSideComponent, LayerTreeComponent, WidgetListComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_CONFIG, useFactory: () => ({ icon: { nzTheme: 'outline' } } as NzConfig) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    console.log(this.injector.get(NzIconService));
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

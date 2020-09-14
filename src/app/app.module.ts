import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { canvasStateReducer, nodesReducer } from './store/reducers';
import { IStore } from './store/store';

registerLocaleData(zh);

const ANTD_MODULES = [NzCardModule];

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
  declarations: [AppComponent, ...COMPONENTS],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}

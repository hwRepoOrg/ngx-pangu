import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { canvasStateReducer, nodesReducer } from './store/reducers';
import { IStore } from './store/store';

const COMPONENTS = [ToolbarComponent];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<IStore>({ nodes: nodesReducer, canvasState: canvasStateReducer }),
  ],
  declarations: [AppComponent, ...COMPONENTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

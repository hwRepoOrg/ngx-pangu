import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const main = async () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  if (module.hasOwnProperty('hot')) {
    hmrBootstrap(module, main);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
  }
} else {
  main()
    .then()
    .catch((err) => console.log(err));
}

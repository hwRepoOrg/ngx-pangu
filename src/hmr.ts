import { ApplicationRef, NgModuleRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  module.hot.accept();

  const bootstrap$ = bootstrap();

  module.hot.dispose(async () => {
    const ngModule = await bootstrap$;

    const makeVisible = createNewHosts(ngModule.injector.get(ApplicationRef).components.map((comp) => comp.location.nativeElement));

    ngModule.destroy();

    makeVisible();
  });
};

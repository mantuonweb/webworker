import { enableProdMode } from '@angular/core';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//-delete
import { bootstrapWorkerUi } from '@angular/platform-webworker';//+add

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
if (environment.production) {
  enableProdMode();
}

bootstrapWorkerUi('../webworker.bundle.js');
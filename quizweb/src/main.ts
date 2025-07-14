import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app-module';
import { environment } from './environments/environment';

// Enable prod mode if in production
if (environment.production) {
  enableProdMode();
}

// Bootstrap the AppModule using Zone.js (default Angular behavior)
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

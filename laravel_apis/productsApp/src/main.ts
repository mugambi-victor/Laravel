// main.ts

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
//import bootstrap from './bootstrap'; // Assuming bootstrap is your custom startup logic

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

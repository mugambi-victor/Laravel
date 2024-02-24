import { bootstrapApplication, provideProtractorTestingSupport,} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import {appRoutes} from './app/app.routes';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(appRoutes)
    ]
  }
).catch(err => console.error(err));

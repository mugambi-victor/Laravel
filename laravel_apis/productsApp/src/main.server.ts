import { ApplicationRef, mergeApplicationConfig } from '@angular/core';
import { bootstrapApplication, provideClientHydration,  } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideHttpClient, withFetch } from '@angular/common/http';



const bootstrap = ():Promise<ApplicationRef>=>{
  const mergedConfig = mergeApplicationConfig(config, {
    providers: [
      provideHttpClient(withFetch()),
      provideClientHydration(),
    ],
  });

  return bootstrapApplication(AppComponent, mergedConfig);
};

export default bootstrap;

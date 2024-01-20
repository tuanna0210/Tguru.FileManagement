import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), SharedModule]
};

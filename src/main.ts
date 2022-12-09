import 'zone.js';

import '@angular/compiler';

import { provideFileRouter } from '@analogjs/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, { providers: [provideFileRouter()] });

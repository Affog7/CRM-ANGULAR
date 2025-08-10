import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {ClientListComponent} from './app/components/client-list/client-list.component';
import {provideRouter, Routes} from '@angular/router';
import {ClientFormComponent} from './app/components/form/client-form/client-form.component';

const routes: Routes = [

  { path: 'clients', component: ClientListComponent },
  { path: 'clients/new', component: ClientFormComponent }

];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(MatIconModule, MatListModule),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

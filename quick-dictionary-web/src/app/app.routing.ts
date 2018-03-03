import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './components/home/home.component';
import { LoginComponent }  from './components/login/login.component';
import { RegistrationComponent }  from './components/registration/registration.component';
import { DictionariesListComponent } from './components/dictionaries-list/dictionaries-list.component';

const appRoutes: Routes = [
  { path: '', component: DictionariesListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
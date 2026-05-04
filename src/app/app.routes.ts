import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/component/principal/principal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: '**', component: NotFoundComponent }
];

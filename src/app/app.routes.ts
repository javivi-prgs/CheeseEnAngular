import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/component/principal/principal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LoginComponent } from './pages/auth/login.component';
import { RegisterComponent } from './pages/auth/register.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'catalogo', component: CatalogComponent },
  { path: 'producto/:id', component: ProductDetailComponent },
  { path: 'pago', component: CheckoutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: '**', component: NotFoundComponent }
];

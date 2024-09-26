import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './customer/components/home/home.component';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a /login en la ruta raíz
    { path: 'login', component: LoginComponent,  },
    { path: 'sign-up', component: SignUpComponent,  },
    { path: 'home', component: HomeComponent, }, // Ruta protegida, solo accesible si está autenticado
];

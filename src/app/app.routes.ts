import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './customer/components/home/home.component';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { ShopComponent } from './customer/components/shop/shop.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TrasnsactionsComponent } from './admin/components/trasnsactions/trasnsactions.component';
import { WalletComponent } from './admin/components/wallet/wallet.component';
import { BudgetComponent } from './admin/components/budget/budget.component';
import { AnaliticsComponent } from './admin/components/analitics/analitics.component';
import { SettingsComponent } from './admin/components/settings/settings.component';
import { FormComponent } from './admin/shared/form/form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a /login en la ruta raíz
    { path: 'login', component: LoginComponent,  },
    { path: 'sign-up', component: SignUpComponent,  },
    { path: 'dashboard', component: DashboardComponent,  },
    { path: 'shop', component: ShopComponent,  },
    { path: 'pruebas', component: FormComponent,  },
    { path: 'home', component: HomeComponent, }, 
    { path: 'inventory', component: TrasnsactionsComponent, }, 
    { path: 'wallet', component: WalletComponent, }, 
    { path: 'budget', component: BudgetComponent, }, 
    { path: 'analitics', component: AnaliticsComponent, }, 
    { path: 'settings', component: SettingsComponent, }, 
];

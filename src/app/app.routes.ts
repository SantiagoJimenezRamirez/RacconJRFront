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
import { CategoryComponent } from './admin/components/category/category.component';
import { ProductCategorySectionComponent } from './customer/components/product-category-section/product-category-section.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordComponent } from './components/password/password.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
    // { path: '**', component: NotFoundComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a /login en la ruta raíz
    { path: 'login', component: LoginComponent,  },
    { path: 'sign-up', component: SignUpComponent,  },
    { path: 'shop', component: ShopComponent,  },
    { path: 'home', component: HomeComponent, }, 
    { path: 'forgot-password', component: ForgotPasswordComponent, }, 
    { path: 'password/:token', component: PasswordComponent, }, 
    { path: 'product-category-section', component: ProductCategorySectionComponent, }, 
    { path: 'admin', component: MenuComponent, children:[
        {path: 'category', component: CategoryComponent},
        { path: 'dashboard', component: DashboardComponent,  },
        { path: 'inventory', component: TrasnsactionsComponent, }, 
        { path: 'wallet', component: WalletComponent, }, 
        { path: 'budget', component: BudgetComponent, }, 
        { path: 'analitics', component: AnaliticsComponent, }, 
        { path: 'settings', component: SettingsComponent, },
    ]}
];

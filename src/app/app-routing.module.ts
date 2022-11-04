import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { EcommerceComponent } from './modules/ecommerce/ecommerce.component';
import { SigninComponent } from './auth/signin/signin.component'
import { CoreComponent } from './core/core.component'
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './shared/service/auth.guard';
import { CalenderComponent } from './modules/calender/calender.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'analytics', component: AnalyticsComponent, data: [{path:['analytics']}], canActivate:[AuthGuard]
      },
      {
        path: 'ecommerce', component: EcommerceComponent, data: [{path:['ecommerce']}], canActivate:[AuthGuard] 
      },
      {
        path: 'calender', component: CalenderComponent, data: [{path:['calender']}], canActivate:[AuthGuard] 
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

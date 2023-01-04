import { EnvironmentInjector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';
import { ContactResolver } from './services/contact.resolver';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { StatsComponent } from './views/stats/stats.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactIndexComponent, children: [
      { path: 'edit/:id', 
      component: ContactEditComponent, 
      resolve:{contact:ContactResolver},
      canActivate:[AuthGuard] 
    },
      { path: 'edit', component: ContactEditComponent },
      { 
        path: ':id', 
        component: ContactDetailsComponent, 
        resolve:{contact:ContactResolver} ,
        canActivate:[AuthGuard]
      },
    ]
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'stats', component: StatsComponent },
  { path: '', component: HomePageComponent, canActivate:[UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

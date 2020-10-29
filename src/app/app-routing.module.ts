import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DeploymentComponent } from './modules/deployment/deployment.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/login/login.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { GroupComponent } from './modules/group/group.component';
import { ApplicationComponent } from './modules/application/application.component';
import { ReleaseComponent } from './modules/release/release.component';
import { ExploreComponent } from './modules/explore/explore.component';
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'home',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'deploy',
      component: DeploymentComponent
    },
    {
      path: 'explore',
      component: ExploreComponent
    },
    {
      path: 'group',
      component: GroupComponent
    },
    {
      path: 'application',
      component: ApplicationComponent
    },
    {
      path: 'release',
      component: ReleaseComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    }
  ]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

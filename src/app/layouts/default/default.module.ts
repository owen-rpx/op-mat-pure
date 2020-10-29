import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DeploymentComponent } from '../../modules/deployment/deployment.component';
import { LoginComponent } from '../../modules/login/login.component';
import { PageNotFoundComponent } from '../../modules/page-not-found/page-not-found.component';
import { ProfileComponent } from '../../modules/profile/profile.component';
import { GroupComponent } from '../../modules/group/group.component';
import { ApplicationComponent } from '../../modules/application/application.component';
import { ReleaseComponent } from '../../modules/release/release.component';
import { ExploreComponent } from '../../modules/explore/explore.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DeploymentComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProfileComponent,
    GroupComponent,
    ApplicationComponent,
    ReleaseComponent,
    ExploreComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }

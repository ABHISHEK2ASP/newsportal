import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboardpage/dashboard/dashboard.component';
import { AuthGuard } from './authGaurd/auth.guard';
import { LoginComponent } from './loginpage/login/login.component';
import { UploadnewsComponent } from './uploadnews/uploadnews/uploadnews.component';
import { UpnewsComponent } from './upnews/upnews/upnews.component';
import { SignupComponent } from './signup/signup/signup.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  }, {
    component: DashboardComponent, path: 'dashboard', canActivate: [AuthGuard]
  }, {
    component: UploadnewsComponent, path: 'uploadnews', canActivate: [AuthGuard]
  }, {
    component: UpnewsComponent, path: 'upnews', canActivate: [AuthGuard]
  },{
    component : LoginComponent , path: 'login'
  },{
    component:SignupComponent ,path: 'signup',canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

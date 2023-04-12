import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginpage/login/login.component';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboardpage/dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { UploadnewsComponent } from './uploadnews/uploadnews/uploadnews.component';
import { SidebarComponent } from './dsidebar/sidebar/sidebar.component';
import { UpnewsComponent } from './upnews/upnews/upnews.component';
import { SignupComponent } from './signup/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UploadnewsComponent,
    SidebarComponent,
    UpnewsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

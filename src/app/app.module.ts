import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FileComponent } from './file/file.component';
import { LoginComponent } from './login/login.component';
import { LoginBoxComponent } from './login/login-box/login-box.component';
import { ApplyBoxComponent } from './login/apply-box/apply-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileComponent,
    LoginComponent,
    LoginBoxComponent,
    ApplyBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

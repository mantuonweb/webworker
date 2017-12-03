import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//https://stackoverflow.com/questions/43276044/angular-cli-generated-app-with-web-
//https://blog.angularindepth.com/angular-with-web-workers-step-by-step-dc11d5872135
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

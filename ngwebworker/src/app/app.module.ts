//import { BrowserModule } from '@angular/platform-browser'; //-Remove
import { WorkerAppModule } from '@angular/platform-webworker'; //++Add
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//https://stackoverflow.com/questions/43276044/angular-cli-generated-app-with-web-
//https://blog.angularindepth.com/angular-with-web-workers-step-by-step-dc11d5872135
//http://www.syntaxsuccess.com/viewarticle/web-workers-in-angular-2.0
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

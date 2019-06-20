import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import 'bootstrap';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SigninComponent
      },
         {
            path: 'dashboard',
            component: DashboardComponent
         }
      ])  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

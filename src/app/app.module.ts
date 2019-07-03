import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import 'bootstrap';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    NavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: '',
        component: NavComponent
      },
         {
            path: 'dashboard',
            component: DashboardComponent
         },
         {
          path: 'card',
          component: CardComponent }
      ])  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

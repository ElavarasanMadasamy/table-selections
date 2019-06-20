import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) {}
  title = 'sasie';
  user = {
    'username': '',
    'password': ''
  };
  username = 'admin';
  password = 'admin';
  routeName = '';
  signIn() {
    if (this.username === this.user.username && this.password === this.user.password) {
      console.log(this.user.username);
      this.routeName = 'dashboard';
      this.router.navigateByUrl('/dashboard');
    } else {
      console.log('Invalid User');
    }
  }

  ngOnInit() {
  }
}

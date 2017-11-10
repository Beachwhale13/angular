import { Component, ViewEncapsulation } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  submitted = false;
  user = new User();
  users = []

  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
    this.submitted = true;
  }
}

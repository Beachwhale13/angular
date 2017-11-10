import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';

  switchArray = [true; true; false; true; false; true; true; true; true; false];

  switched(idx){
    this.switchArray[idx] = !this.switchArray[idx];
  }
}

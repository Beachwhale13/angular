import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  now = new(Date);
  lastSelected = null;
  clear = true;

  getZone(zone){
    this.now = new Date();
    if (zone == 'clear'){
      this.lastSelected = null;
      this.clear = true;
      }
    else if (zone == 'MST'){
      this.now.setHours(this.now.getHours() + 1);
      this.lastSelected = zone;
      this.clear = false;
      }
    else if (zone == 'CST'){
      this.now.setHours(this.now.getHours() + 2);
      this.lastSelected = zone;
      this.clear = false;
      }
    else if (zone == 'EST'){
      this.now.setHours(this.now.getHours() + 3);
      this.lastSelected = zone;
      this.clear = false;
      }
    }
  }
}

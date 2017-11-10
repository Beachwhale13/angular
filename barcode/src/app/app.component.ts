import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = ['Aqua', 'CornflowerBlue', 'Cyan', 'DeepSkyBlue', 'DodgerBlue', 'DarkTurqoise', 'LightBlue', 'LightSkyBlue', 'MediumBlue', 'RoyalBlue'];

  randColors = [];

  createArray(){
    for(let i = 0; i < 10; i++){
      const number = (Math.floor(Math.random()*10))+1;
      this.randColors.push(this.colors[number]);
    }
  }
  constructor (){
    this.createArray();
  }
}

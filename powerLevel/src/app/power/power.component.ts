import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PowerComponent implements OnInit {
  powerLevel = [];

  power: number;

  createlevels(){
    for (var i = 1; i <= 100; i++){
      this.powerLevel.push(i);
    }
  }
  constructor() {
    this.createlevels();
  }

  ngOnInit() {
    this.power = 1;
  }

}

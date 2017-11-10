import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power * 250;
  }

}

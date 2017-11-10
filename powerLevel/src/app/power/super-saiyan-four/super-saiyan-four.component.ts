import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanFourComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power * 500;
  }

}

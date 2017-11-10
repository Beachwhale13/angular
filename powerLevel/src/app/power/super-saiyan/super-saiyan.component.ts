import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power * 90;
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-components',
  templateUrl: './my-components.component.html',
  styleUrls: ['./my-components.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

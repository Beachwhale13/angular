import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteComponent implements OnInit {
  @Input() quotes;
  @Output() createQuote = new EventEmitter();

  quote = {text: '', author: '', popular: 0};
  //quote: object;

  constructor() {
    // this.quote = {text: '', author: '', popular: 0};
   }

  ngOnInit() {
  }

  onSubmit(){
    this.quote = {text: '', author: '', popular: 0};
    this.createQuote.emit(this.quote);
  }

}

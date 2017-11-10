import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;
  @Output() removeQuote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  voteAdd(quote){
    quote.popular++;
  }

  voteRemove(quote){
    quote.popular--;
  }
  delete(quote){
    this.removeQuote.emit(quote);
  }
}

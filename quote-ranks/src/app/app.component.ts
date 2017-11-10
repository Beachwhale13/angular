import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];

  addQuote(quote){
    console.log("I got the new quote" + quote);
    this.quotes.push(quote);
  }

  deleteQuote(quote){
    var idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}

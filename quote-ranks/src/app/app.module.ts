import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteListComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

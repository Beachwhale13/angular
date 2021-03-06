import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Input } from '@angular/core';


import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { FormsModule } from '@angular/forms';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './power/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './power/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './power/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './power/super-saiyan-four/super-saiyan-four.component';



@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

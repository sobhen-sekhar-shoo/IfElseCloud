import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LeftmenuComponent } from './Components/leftmenu/leftmenu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavComponent } from './Components/top-nav/top-nav.component';
import { CardsComponent } from './Components/cards/cards.component';
import { OrderTableComponent } from './Components/order-table/order-table.component';
import { UsersComponent } from './Components/users/users.component';
import { ChartsComponent } from './Components/charts/charts.component';
import { RandomPipe } from './Pipes/random.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    TopNavComponent,
    CardsComponent,
    OrderTableComponent,
    UsersComponent,
    ChartsComponent,
    RandomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

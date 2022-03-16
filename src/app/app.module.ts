import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ClockComponent } from './clock/clock.component';
import { CounterComponent } from './counter/counter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EkansGameComponent } from './ekans-game/ekans-game.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClockComponent,
    CounterComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "", component: MainComponent},
      {path: "clock", component: ClockComponent},
      {path: "calculator", component: CalculatorComponent},
      {path: "counter", component: CounterComponent},
      {path: "ekans", component: EkansGameComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

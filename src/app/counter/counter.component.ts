import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public incrementCounter():void 
  {
    this.count++;
  }

  public resetCounter(): void
  {
    this.count = 0;
  }

}

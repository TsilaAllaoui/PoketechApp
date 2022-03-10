import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getTime():string {
    return new Date().toLocaleTimeString().split(" ")[0];
  }

}

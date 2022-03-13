import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() {
    this.updateTime();
   }

  public time:string = new Date().toLocaleTimeString().split(" ")[0];
  public date:string = new Date().toLocaleDateString(); 

  ngOnInit(): void {
  }

  public updateTime(){

    setInterval(() => {
      this.time = new Date().toLocaleTimeString("en-US", {hour12: false}).split(" ")[0];
      this.date = new Date().toLocaleDateString("fr-FR"); 
    }, 1000)
  }

}

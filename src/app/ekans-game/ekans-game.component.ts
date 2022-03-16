import { Component, OnInit } from '@angular/core';

interface Head
{
  speed:number,
  direction:string,
}

@Component({
  selector: 'app-ekans-game',
  templateUrl: './ekans-game.component.html',
  styleUrls: ['./ekans-game.component.css']
})
export class EkansGameComponent implements OnInit {

  public head:Head = {
    speed: 10,
    direction: "down",
  }

  public currStyle:string = "height: 30px; width: 30px; background-color: blue; position: relative; left: 0; top: 0;"
  public top:string = "0";
  public left:string = "0";

  constructor() { }

  ngOnInit(): void {
    this.move();
  }

  public goUp()
  {
    this.head.direction = "up";
  }

  
  public goDown()
  {
    this.head.direction = "down";
  }

  
  public goLeft()
  {
    this.head.direction = "left";
  }

  
  public goRight()
  {
    this.head.direction = "right";
  }

  public move():void
  {
    setInterval(() => {
      if (this.head.direction == "down")
      {
        this.top = (parseInt(this.top) + this.head.speed).toString();
        this.currStyle = "top: " + this.top + "px;" + "left: " + this.left + "px;"
                // this.currStyle = "height: 30px; width: 30px; background-color: blue; position: relative; left: 0px; top: " + this.top + "px;"
      }
      else if (this.head.direction == "up")
      {
        this.top = (parseInt(this.top) - this.head.speed).toString();
        this.currStyle = "top: " + this.top + "px;" + "left: " + this.left + "px;"
                // this.currStyle = "height: 30px; width: 30px; background-color: blue; position: relative; left: 0px; top: " + this.top + "px;"
      }
      else if (this.head.direction == "left")
      {
        this.left = (parseInt(this.left) - this.head.speed).toString();
        this.currStyle = "top: " + this.top + "px;" + "left: " + this.left + "px;"
                // this.currStyle = "height: 30px; width: 30px; background-color: blue; position: relative; left: 0px; top: " + this.top + "px;"
      }
      else if (this.head.direction == "right")
      {
        this.left = (parseInt(this.left) + this.head.speed).toString();
        this.currStyle = "top: " + this.top + "px;" + "left: " + this.left + "px;"
                // this.currStyle = "height: 30px; width: 30px; background-color: blue; position: relative; left: 0px; top: " + this.top + "px;"
      }
    }, 1000);
  }

}

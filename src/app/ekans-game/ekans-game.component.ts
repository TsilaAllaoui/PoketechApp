import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';

interface Head {
  speed: number,
  direction: string,
  left: number;
  top: number
}
export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Component({
  selector: 'app-ekans-game',
  templateUrl: './ekans-game.component.html',
  styleUrls: ['./ekans-game.component.css']
})
export class EkansGameComponent implements AfterViewInit {

  public currStyle: string = "height: 30px; width: 30px; background-color: blue; position: absolute; left: 0; top: 0;"
  public snakeHead: any;

  @ViewChild("sHead", { read: ElementRef }) shead!: ElementRef;


  ngAfterViewInit() { }

  public head: Head = {
    speed: 10,
    direction: "down",
    top: 0,
    left: 0
  }

  constructor() { }

  ngOnInit(): void {
    this.move();
  }

  public goUp() {
    this.head.direction = "up";
  }


  public goDown() {
    this.head.direction = "down";
  }


  public goLeft() {
    this.head.direction = "left";
  }


  public goRight() {
    this.head.direction = "right";
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key == "ArrowUp")
    {
      this.goUp();
      console.log("up");
    }
    else if (event.key == "ArrowDown")
    {
      this.goDown();
      console.log("down");
    }
    else if (event.key == "ArrowLeft")
    {
      this.goLeft();
      console.log("left");
    }
    else if (event.key == "ArrowRight")
    {
      this.goRight();
      console.log("right");
    }
    console.log(this.head);
  }

  public move(): void {
    setInterval(() => {
      if (this.head.direction == "down" && this.head.top + this.head.speed <= 470) {
        this.head.top += this.head.speed;
        this.currStyle = "height: 30px; width: 30px; background-color: blue; position: absolute; " + "top: " + this.head.top + "px;" + "left: " + this.head.left + "px;"
      }
      else if (this.head.direction == "up" && this.head.top - this.head.speed >= 0) {
        this.head.top -= this.head.speed;
        this.currStyle = "height: 30px; width: 30px; background-color: blue; position: absolute; " + "top: " + this.head.top + "px;" + "left: " + this.head.left + "px;"
      }
      else if (this.head.direction == "left" && this.head.left - this.head.speed >= 0) {
        this.head.left -= this.head.speed;
        this.currStyle = "height: 30px; width: 30px; background-color: blue; position: absolute; " + "top: " + this.head.top + "px;" + "left: " + this.head.left + "px;"
      }
      else if (this.head.direction == "right" && this.head.left + this.head.speed <= 690) {
        this.head.left += this.head.speed;
        this.currStyle = "height: 30px; width: 30px; background-color: blue; position: absolute; " + "top: " + this.head.top + "px;" + "left: " + this.head.left + "px;"
      }
    }, 200);
  }

}

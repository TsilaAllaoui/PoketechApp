import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public result:string = "";

  public updateOutput(input:string):void
  {
    this.result += input;
  }

  public resetOutput():void
  {
    this.result = "";
  }

  public checkFormat():boolean
  {
    let tests = ['.','x','+','-','/'];
    for (let i=0; i<tests.length; i++)
      if (this.result[1] == tests[i])
        return true;
    return false;
  }

  public checkZeros():void
  {
    while(this.result[0] == "0" && !this.checkFormat())
    {
      this.result = this.result.slice(1);
      console.log(this.result);
    }
  }

  public computeOutput():void
  {
    this.checkZeros();
    this.result = eval(this.result.replace("x","*"));
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  counterPress:number = 0;
  starText: string;
  presidents: string[] = ["Higgins",
    "McAleese",
    "Robinson",
    "Hillery"];

  presidents2: object[] = 
  [
    {name:"Higgins", term:"2011-"},
    {name:"McAleese", term:"1997-2011"},
    {name:"Robinson", term:"1990-1997"},
    {name:"Hillery", term:"1974-1997"}
    ];
    

  countPress(){
    this.counterPress++;
  }

  addText(){
    if(this.starText == null)
  this.starText = "Look at the Star";
  else if (this.starText == "Look at the Star") {
    this.starText = null;
  }
  }
}

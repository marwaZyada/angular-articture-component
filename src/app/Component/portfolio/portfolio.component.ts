import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
images:object[]=
[{src:"assets/images/cabin.png", label:"exampleModal1",name:"log cabin"},
{src:"assets/images/cake.png",label:"exampleModal2",name:"tasty cake"},
{src:"assets/images/circus.png",label:"exampleModal3",name:"circus tent"},
{src:"assets/images/game.png",label:"exampleModal4",name:"controller"},
{src:"assets/images/safe.png",label:"exampleModal5",name:"locked safe"},
{src:"assets/images/submarine.png",label:"exampleModal6",name:"submarine"}]

}

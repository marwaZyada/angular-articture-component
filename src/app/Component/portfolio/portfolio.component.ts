import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
images:object[]=
[{src:"assets/images/cabin.png", label:"exampleModal1"},
{src:"assets/images/cake.png",label:"exampleModal2"},
{src:"assets/images/circus.png",label:"exampleModal3"},
{src:"assets/images/game.png",label:"exampleModal4"},
{src:"assets/images/safe.png",label:"exampleModal5"},
{src:"assets/images/submarine.png",label:"exampleModal6"}]

}

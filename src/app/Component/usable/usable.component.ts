import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-usable',
  templateUrl: './usable.component.html',
  styleUrls: ['./usable.component.css']
})
export class UsableComponent {
@Input() portfolio:string="start angular";
}

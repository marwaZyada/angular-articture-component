import { Component, Renderer2, ViewChild, HostListener,ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private render:Renderer2){

  }

  @ViewChild('ref') ref !:ElementRef;

  @HostListener ('window :scroll') function(){
    if(window.scrollY>=350){
      console.log("gg");
    this.render.addClass(this.ref.nativeElement,'py-4')
    
    }
    else
    {this.render.removeClass(this.ref.nativeElement,'py-4')}
    console.log(this.ref)
  }
 
}

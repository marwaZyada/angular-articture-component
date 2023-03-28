import { Component, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // show:boolean=true

  goTop(){
    
    console.log("hi")
    window.scrollTo(0,50);
   
  }

 
  

 

ngOnInit(): void {
  
  if(window.screenY==350){
    console.log(window.scrollY)
  }
}

}

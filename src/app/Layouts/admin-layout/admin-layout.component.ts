import { Component, OnInit, ElementRef } from '@angular/core';
//import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  private _router: Subscription;

  constructor( private router: Router,private elementRef: ElementRef) {
    console.log('constuctor')
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.attachEventListeners()
}
attachEventListeners(){
    this.elementRef.nativeElement.addEventListener('click',function(eve){
        if(eve.target.getAttribute('class') !== 'nav-link dropdown-toggle')
          if(document.querySelector('.dropdown-menu').classList.contains('show'))
              document.querySelector('.dropdown-menu').classList.remove('show')
    })
}
}

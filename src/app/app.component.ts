import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appliqate';

 /* public url;

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let curUrlTree = this.router.parseUrl(this.router.url);
        console.info(this.router.url);
        this.url = this.router.url;
        $('.ssd').removeClass('active');
         if (this.url == '/') {
           $('.ssd').eq(0). addClass('active');
         }
        //
         if (this.url == '/blockchain') {
           $('.ssd').eq(1).addClass('active');
         }


      }
    });

  }*/
}

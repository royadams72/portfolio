import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy{
   page = '';
   location;
   subscribeArray:Array<any> = [];

    constructor(public  _router : Router){}

    ngOnInit(){
    this.location =  this._router.events.subscribe((url) => this.page = this._router.url);
    this.subscribeArray.push(this.location);
    }

    ngOnDestroy(){
     for (let entry of this.subscribeArray ){
        entry.unsubscribe();
        console.log(entry)
      }

    }
}

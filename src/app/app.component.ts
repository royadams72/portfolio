import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  clientHeight: number;

  onResize(event) {
    this.clientHeight =  event.target.innerHeight;
    console.log(event.target.innerHeight);
  }
    constructor() {}
    
    ngOnInit(){
      //Set initial height of window
     this.clientHeight = window.innerHeight;
     //Subscribe to window event and call onResize
      Observable.fromEvent(window, 'resize')
        .subscribe((event) => {
          this.onResize(event);
        });
    }
}

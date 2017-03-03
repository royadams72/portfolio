import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
   location ='';

    constructor(private  _router : Router)
      {
        //subscribe to the router, so can track the url; to hade and show navigation
        _router.events.subscribe((url) => this.location = _router.url);
      }

}

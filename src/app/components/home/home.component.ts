import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  pageTitle: string;
  constructor(private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.pageTitle = this.activatedRoute.snapshot.data.title;
    // console.log("page info= " + this.pageTitle)
    this.title.setTitle(this.pageTitle);
    // this.meta.removeTag('description')
    this.meta.updateTag({
      name: 'description', content: `Welcome to my online portfolio, with my most recent work, you'll find links to; Online Adverts: with examples of rich media animated ads, as well as simple games for mobiles. Print Work: A collection of leaflets and CD covers. Websites: An assortment of Websites, Apps and landing pages, using Angular 2+, HTML, Javascript, CSS, SCSS and designed to meet the clients needs. And Games: All games are created using HTML5, for clients ranging from, ford to Foxy Casino.com`
    })
  }

}

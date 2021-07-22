import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html'
})
export class AddsComponent implements OnInit {
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
      name: 'description', content: `Here are a selection of rich media animated ads, as well as simple games for mobiles. Built using various, libraries, Pixi.js and GSAP being my favourite`
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
// ,
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html'
})
export class PrintComponent implements OnInit {
  pageTitle: string;
  constructor(private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.pageTitle = this.activatedRoute.snapshot.data.title;
    // console.log("page info= " + this.pageTitle)
    this.title.setTitle(this.pageTitle);
    // this.meta.removeTag('description')
    this.meta.updateTag({ name: 'description', content: "This a collection of my favourite print jobs, ranging from CD covers to leaflets for print companies" })
  }

}

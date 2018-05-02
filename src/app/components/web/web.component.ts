import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
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
      name: 'description', content: `Websites, Apps and landing pages, using modern frontend technologies.`
    })
  }

}

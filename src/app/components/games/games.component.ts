import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
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
      name: 'description', content: `All games are created using HTML5 for browsers as well as mobile, for clients ranging from, ford to Foxy Casino.com`
    })
  }

}

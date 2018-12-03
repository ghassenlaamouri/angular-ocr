import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  publication = new Date();

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;

  constructor() {}

  ngOnInit() {
  }

  getTitle() {
    return this.postTitle;
  }

  getContent() {
    return this.postContent;
  }

  onLoveIt() {    
    this.postLoveIts = this.postLoveIts+1;
    console.log(this.postLoveIts);
  }

  onDontLoveIt() {
    this.postLoveIts = this.postLoveIts-1;
    console.log(this.postLoveIts);
  }

}

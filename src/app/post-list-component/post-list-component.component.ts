import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postHateIts: number;
  @Input() postCreatedAt: Date;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickLoveIt(): void {
    this.postLoveIts++;
  }

  onClickHateIt(): void {
    this.postHateIts++;
  }
}

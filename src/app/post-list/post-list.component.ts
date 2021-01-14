import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

// @Input() postTitle: string;
//   @Input() postContent: string;
//   @Input() postLoveIts: number;
//   @Input() postHateIts: number;
//   @Input() postCreatedAt: Date;

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }


  onClickLoveIt(i: number): void {
    this.postsService.loveIt(i);
  }

  onClickHateIt(i: number): void {
    this.postsService.hateIt(i);
  }

  onClickDeletePost(post: Post): void {
    this.postsService.deletePost(post);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

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


  onClickLoveIt(): void {
    this.postLoveIts++;
  }

  onClickHateIt(): void {
    this.postHateIts++;
  }

  onClickDeletePost(post: Post): void {
    this.postsService.deletePost(post);
  }

}

import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }


}

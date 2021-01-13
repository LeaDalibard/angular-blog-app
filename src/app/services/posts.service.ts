import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }
}

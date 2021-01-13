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

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl)=>{
        if(postEl === post){
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove,1);
    this.emitPosts();
  }

}

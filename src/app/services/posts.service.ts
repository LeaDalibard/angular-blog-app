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
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  loveIt(post: Post) {
    const postIndexToLove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    const posts = this.posts;
    const postLoved = posts[postIndexToLove];
    postLoved.loveIts++;
    this.posts[postIndexToLove] = postLoved;
    this.emitPosts();
  }

  hateIt(post: Post) {
    const postIndexToHate = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    const posts = this.posts;
    const postHated = posts[postIndexToHate];
    postHated.hateIts++;
    this.posts[postIndexToHate] = postHated;
    this.emitPosts();
  }

}

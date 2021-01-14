export class Post {
  loveIts: number;
  hateIts: number;

  constructor(public title: string, public content: string, public createdAt: Date) {
  }
}

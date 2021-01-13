export class Post {
  LoveIts: number;
  HateIts: number;

  constructor(public title: string, public content: string, public createdAt: Date) {
  }
}

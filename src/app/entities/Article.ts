export class Article {
  public id: number;
  public featured: boolean;
  public publishedAt: string;
  public title: string;
  public url: string;
  public imageUrl: string;
  public newsSite: string;
  public summary: string;
  public updatedAt: string;

  constructor(props: Article) {
    Object.assign(this, props);
  }
}

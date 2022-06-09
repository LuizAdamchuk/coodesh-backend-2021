import { ListAllArticle } from "./ListAllArticle";
import FakeArticlesRepository from "../../../repositories/fakes/FakesArticlesRepository";
import { CreateArticle } from "../Create/CreateArticle";

describe("listAllArticleService", () => {
  let prismaArticleRepository: FakeArticlesRepository;
  let listAllArticleService: ListAllArticle;
  let createArticle: CreateArticle;

  beforeAll(() => {
    prismaArticleRepository = new FakeArticlesRepository();
    listAllArticleService = new ListAllArticle(prismaArticleRepository);
    createArticle = new CreateArticle(prismaArticleRepository);

    createArticle.execute({
      id: 2,
      title: "teste",
      featured: true,
      imageUrl: "teste",
      newsSite: "teste",
      summary: "teste",
      publishedAt: "teste",
      url: "teste",
      updatedAt: "teste",
    });
  });

  it("should execute be called", async () => {
    const spyListAllArticleService = jest.spyOn(
      listAllArticleService,
      "execute"
    );

    const result = await listAllArticleService.execute(1);

    expect(spyListAllArticleService).toBeCalled();
    expect(result).toHaveLength(2);
  });
});

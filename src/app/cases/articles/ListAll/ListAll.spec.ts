import { ListAllArticle } from "./ListAllArticle";
import FakeArticlesRepository from "../../../repositories/fakes/FakesArticlesRepository";

describe("listAllArticleService", () => {
  let prismaArticleRepository: FakeArticlesRepository;
  let listAllArticleService: ListAllArticle;

  beforeAll(() => {
    prismaArticleRepository = new FakeArticlesRepository();

    listAllArticleService = new ListAllArticle(prismaArticleRepository);
  });

  it("should execute be called", async () => {
    const spyListAllArticleService = jest.spyOn(
      listAllArticleService,
      "execute"
    );
    const expectedResult = [
      {
        id: 1,
        title: "teste",
        featured: false,
        imageUrl: "teste",
        newsSite: "teste",
        summary: "teste",
        publishedAt: "teste",
        url: "teste",
        updatedAt: "teste",
      },
    ];

    const result = await listAllArticleService.execute(1);

    expect(spyListAllArticleService).toBeCalled();
    expect(result).toEqual(expectedResult);
  });
});

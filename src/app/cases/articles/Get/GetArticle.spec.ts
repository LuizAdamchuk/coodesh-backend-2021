import { GetArticle } from "./GetArticle";
import FakeArticlesRepository from "../../../repositories/fakes/FakesArticlesRepository";

describe("getArticleService", () => {
  let prismaArticleRepository: FakeArticlesRepository;
  let getArticleService: GetArticle;

  beforeAll(() => {
    prismaArticleRepository = new FakeArticlesRepository();

    getArticleService = new GetArticle(prismaArticleRepository);
  });

  it("should execute be called", async () => {
    const spyGetArticleService = jest.spyOn(getArticleService, "execute");

    const expectedResult = {
      id: 1,
      title: "teste",
      featured: false,
      imageUrl: "teste",
      newsSite: "teste",
      summary: "teste",
      publishedAt: "teste",
      url: "teste",
      updatedAt: "teste",
    };

    const result = await getArticleService.execute(1);

    expect(spyGetArticleService).toBeCalled();
    expect(result).toEqual(expectedResult);
  });

  it("should be return error if article not found", async () => {
    await expect(getArticleService.execute(3)).rejects.toBeInstanceOf(Error);
  });
});

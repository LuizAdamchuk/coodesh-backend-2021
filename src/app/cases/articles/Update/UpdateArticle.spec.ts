import { UpdateArticle } from "./UpdateArticle";
import FakeArticlesRepository from "../../../repositories/fakes/FakesArticlesRepository";

describe("updateArticleService", () => {
  let prismaArticleRepository: FakeArticlesRepository;
  let updateArticleService: UpdateArticle;

  beforeAll(() => {
    prismaArticleRepository = new FakeArticlesRepository();

    updateArticleService = new UpdateArticle(prismaArticleRepository);
  });

  it("should execute be called", async () => {
    const spyUpdateArticleService = jest.spyOn(updateArticleService, "execute");
    const expectedResult = {
      id: 1,
      title: "teste",
      featured: true,
      imageUrl: "UPDATE TEST",
      newsSite: "teste",
      summary: "UPDATE TEST",
      publishedAt: "teste",
      url: "teste",
      updatedAt: "teste",
    };

    const result = await updateArticleService.execute(1, expectedResult);

    expect(spyUpdateArticleService).toBeCalled();
    expect(result).toEqual(expectedResult);
  });
});

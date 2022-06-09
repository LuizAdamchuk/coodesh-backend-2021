import { DeleteArticle } from "./DeleteArticle";
import FakeArticlesRepository from "../../../repositories/fakes/FakesArticlesRepository";

describe("deleteArticleService", () => {
  let prismaArticleRepository: FakeArticlesRepository;
  let deleteArticleService: DeleteArticle;

  beforeAll(() => {
    prismaArticleRepository = new FakeArticlesRepository();

    deleteArticleService = new DeleteArticle(prismaArticleRepository);
  });

  it("should execute be called", async () => {
    const spyDeleteArticleService = jest.spyOn(deleteArticleService, "execute");

    await deleteArticleService.execute(1);

    expect(spyDeleteArticleService).toBeCalled();
  });
});

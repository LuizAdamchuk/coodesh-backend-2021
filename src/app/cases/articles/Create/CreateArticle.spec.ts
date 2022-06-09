import { CreateArticle } from "./CreateArticle";
import FakeArticlesRepository from "../../../repositories/fakes/FakesArticlesRepository";

describe("createArticleService", () => {
  let prismaArticleRepository: FakeArticlesRepository;
  let createArticleService: CreateArticle;

  beforeAll(() => {
    prismaArticleRepository = new FakeArticlesRepository();

    createArticleService = new CreateArticle(prismaArticleRepository);
  });

  it("should execute be called", async () => {
    const spyCreateArticleService = jest.spyOn(createArticleService, "execute");

    await createArticleService.execute({
      id: 2,
      title: "Teste",
      featured: false,
      url: "teste",
      imageUrl: "teste",
      newsSite: "teste",
      summary: "teste",
      publishedAt: "teste",
      updatedAt: "teste",
    });

    expect(spyCreateArticleService).toBeCalled();
  });

  it("should not be able to create", async () => {
    await expect(
      createArticleService.execute({
        id: 2,
        title: "Teste",
        featured: false,
        url: "teste",
        imageUrl: "teste",
        newsSite: "teste",
        summary: "teste",
        publishedAt: "teste",
        updatedAt: "teste",
      })
    ).rejects.toBeInstanceOf(Error);
  });
});

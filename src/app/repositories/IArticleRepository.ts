import { ICreateArticleRequestDTO } from "../cases/articles/Create/CreateArticleDTO";
import { IGetArticleResponseDTO } from "../cases/articles/Get/GetArticleDTO";
import { IUpdateArticleRequestDTO } from "../cases/articles/Update/UpdateArticleDTO";

export interface IArticleRepository {
  save(article: ICreateArticleRequestDTO): Promise<void>;
  listAll(page: number): Promise<any>;
  get(id: number): Promise<IGetArticleResponseDTO>;
  delete(id: number): Promise<void>;
  update(id: number, article: IUpdateArticleRequestDTO): Promise<any>;
}

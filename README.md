# Back-end Challenge 🏅 2021 - Space Flight News

Este é um desafio para avaliação das capacidades de desenvolvimento Back-end Developer, o objetivo deste projeto é criar uma API Rest que utilizará os dados do projeto
[Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation), uma api pública com informações sobre voos espaciais.

### ToDo

- Obrigatório 1:

* [x] [GET]/: Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"
* [x] [GET]/articles/: Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST
* [x] [GET]/articles/{id}: Obter a informação somente de um artigo
* [x] [POST]/articles/: Adicionar um novo artigo

* [x] [PUT]/articles/{id}: Atualizar um artigo baseado no id
* [x] [DELETE]/articles/{id}: Remover um artigo baseado no id

- Obrigatório 2:

* [x] Para alimentar o seu banco de dados você deve criar um script para armazenar os dados de todos os artigos na Space Flight News API.

- Obrigatório 3:

* [x] Além disso você precisa desenvolver um CRON para ser executado diariamente às 9h e armazenar em seu os novos artigos ao seu banco de dados. (Para essa tarefa você poderá alterar o seu modelo de dados)

- Diferencial 1:

* [x] Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

- Diferencial 2:

* [x] Configurar um sistema de alerta se houver algum falha durante a sincronização dos artigos;

- Diferencial 3:

* [x] Descrever a documentação da API utilizando o conceito de Open API 3.0;

- Diferencial 4:

* [x] Escrever Unit Tests para os endpoints da API;


# Tecnologiais Utilizadas

- Nodejs
- Postgresql
- Docker
- Prisma
- Jest
- Swagger
- Mailtrap

## Instalação do Projeto

# Sem Docker Compose

- Passo 1:

Crie o Banco de dados postgresql em sua máquina.

```
docker run --name testapi -p 5432:5432 -e POSTGRES_PASSWORD="testapi" -d postgres
```

-> Crie um arquivo .env na raiz no projeto, cole:

```
DATABASE_URL="postgresql://postgres:testapi@localhost:5432/postgres?schema=public"
```

- Passo 2:

instale as dependências do projeto:

```
yarn add
```

- Passo 3:

crie as tabelas no banco com o comando da migration

```
npx prisma migrate dev
```

- Passo 4:

suba o servidor

```
yarn start
```

-> Para fins de teste a cron irá rodar a cada 3 minutos, populando o banco de dados com os valores. Basta comentar no arquivo server.ts para que a cron pare de rodar:
```
// cronArticles();
```

# Com Docker

-> Crie um arquivo .env na raiz no projeto, cole:
```
DATABASE_URL="postgresql://postgres:spaceflight@spaceflight-db:5432/spaceflight?schema=public"
```

- Passo 1 *(pode demorar de 1-3min para subir)*:
```
docker-compose up -d
```

- Passo 2 *(finalizar aplicação)*:
```
docker-compose down
```

## URLs:
- Welcome: http://localhost:3333/
- Swagger(API-Docs): http://localhost:3333/api-docs

## Extra:

   ### Logs

   *Para visualizar os logs* 
      ```
      docker container ls
      ```
      >*Pegar o id do coodesh-backend-2021_app*
      ```
      docker container logs -f <id>
      ```

   ### Caso queira testar o alerta via E-MAIL

   - Crie um conta no [Mailtrap](https://mailtrap.io/signin)
   - Coloque as variaveis abaixo no .env criado na raiz do seu projeto. 

   ```
   MAILTRAP_HOST=(pegue as variaveis no seu mailtrap)
   MAILTRAP_PORT=(pegue as variaveis no seu mailtrap)
   MAILTRAP_USER=(pegue as variaveis no seu mailtrap)
   MAILTRAP_PASS=(pegue as variaveis no seu mailtrap)
   ```

   ### INSOMNIA
   *Para testar as requisições*
   - Arquivo está dentro de útils, basta importart no seu insomnia.

---

Logs da cron em funcionamento: 
- Erro, disparando email de alerta.


![image](https://user-images.githubusercontent.com/53198996/175331422-3cb8f371-692f-45e4-8779-879f972550e2.png)
- Sincronizando grande quantidade de dados.


![image](https://user-images.githubusercontent.com/53198996/175331629-07b8436b-6344-418c-ab13-1836e927dd01.png)
- Mantendo a api sincronizada.


![image](https://user-images.githubusercontent.com/53198996/175331757-c2af895a-13ef-48e4-bd48-d7ffe5dac352.png)

This is a challenge by [Coodesh](https://coodesh.com).



import cron from "node-cron";
import { ConsumerService } from "../app/services/ConsumerService";
import { MailtrapMailProvider } from "../app/services/implementations/MailtrapMailProvider";
import { prismaClient } from "../db/prisma/prismaClient";
import { DateUtils } from "../utils/Date";
import { EmailsUtils } from "../utils/Emails";

async function multipleRequests(consumerService, total: number) {
  console.log("Multiple resquests needed for update the DB, wait...");
  for (let i = 1000; i < total; i += 1000) {
    try {
      console.log(`Getting data: ${i - 999} ~ ${i}`);
      const articles = await consumerService.listAllArticles(i - 999, i);
      await consumerService.saveArticles(articles);
    } catch (error: any) {
      console.log("Something go wrong, verify the timeout of Space News API");
    }
  }
}

const cronArticles = async () => {
  cron.schedule(
    //TODO - Lembrar de alterar para as 09:00 -> 0 9 * * *
    //TODO - Ao conectar na AWS fazer a conexao do logger do CW
    "0 */1 * * * *",
    async () => {
      const consumerService = new ConsumerService();
      const mailProvider = new MailtrapMailProvider();
      const emailUtils = new EmailsUtils(mailProvider);
      const dateUtils = new DateUtils();

      const startDate = new Date().getTime();
      console.log(
        "[START] [cronArticle] - ",
        dateUtils.parsedEpochToString(startDate)
      );

      try {
        const total = await consumerService.getCount();
        console.log(`Total articles: ${total}`);

        const cronJob = await prismaClient.cronJob.findFirst({
          orderBy: { id: "desc" },
        });

        let cronJobQuantity = cronJob?.quantity || 0;

        if (cronJobQuantity != total) {
          await consumerService.saveLogCron(total);

          const requests = total - cronJobQuantity;

          if (requests > 1000) {
            await multipleRequests(consumerService, total);
          } else {
            const articles = await consumerService.listAllArticles(1, requests);
            await consumerService.saveArticles(articles);
            console.log(`Data updated, more ${articles.length} data`);
          }
        }
        console.log("DB and API synchronized");
      } catch (error) {
        console.log("Email de Alerta para o suporte disparado!");
        await emailUtils.alert("[cronArticle]");
      }
      const endDate = new Date().getTime();
      console.log(
        "[STOP] [cronArticle] - ",
        dateUtils.parsedEpochToString(endDate)
      );
    },
    {
      scheduled: true,
      timezone: "America/Sao_Paulo",
    }
  );
};

export { cronArticles };

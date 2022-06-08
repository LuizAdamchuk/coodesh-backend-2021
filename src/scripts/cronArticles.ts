import cron from "node-cron";
import { ConsumerService } from "../app/services/ConsumerService";
import { MailtrapMailProvider } from "../app/services/implementations/MailtrapMailProvider";
import { prismaClient } from "../db/prisma/prismaClient";

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

function parsedDataTime(date: number) {
  return new Date(date).toLocaleTimeString();
}

async function emailAlert(errorType: string, mailProvider) {
  await mailProvider.sendMail({
    to: {
      name: "Suporte",
      email: "backoffice@email.com",
    },
    from: {
      name: "Alerts",
      email: "alert@email.com",
    },
    subject: `Erro ${errorType}`,
    body: `Verifique os logs da ${errorType}`,
  });
}

const cronArticles = async () => {
  cron.schedule(
    //TODO - Lembrar de alterar para as 09:00 -> 0 9 * * *
    "0 */1 * * * *",
    async () => {
      const startDate = new Date().getTime();
      console.log("[START] [cronArticle] - ", parsedDataTime(startDate));
      const consumerService = new ConsumerService();
      const mailProvider = new MailtrapMailProvider();
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
            const articles = await consumerService.listAllArticles(
              1,
              requests + 1
            );
            await consumerService.saveArticles(articles);
          }
          console.log("Data updated");
        }
        console.log("DB and API synchronized");
      } catch (error) {
        console.log("Email de Alerta para o suporte disparado!");
        await emailAlert("[cronArticle]", mailProvider);
      }
      const endDate = new Date().getTime();
      console.log("[STOP] [cronArticle] - ", parsedDataTime(endDate));
    },
    {
      scheduled: true,
      timezone: "America/Sao_Paulo",
    }
  );
};

export { cronArticles };

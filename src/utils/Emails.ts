import { MailtrapMailProvider } from "../app/services/implementations/MailtrapMailProvider";

export class EmailsUtils {
  constructor(private mailProvider: MailtrapMailProvider) {}

  public async alert(errorType: string) {
    await this.mailProvider.sendMail({
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
}

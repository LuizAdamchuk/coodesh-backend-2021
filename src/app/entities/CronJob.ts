export class CronJob {
  public readonly id: string;
  public readonly runAt: Date;
  public quantity: number;

  constructor(props: Omit<CronJob, "id" | "runAt">) {
    Object.assign(this, props);
  }
}

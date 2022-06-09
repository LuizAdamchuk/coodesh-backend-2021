export class DateUtils {
  public parsedEpochToString(date: number) {
    return new Date(date).toLocaleTimeString();
  }
}

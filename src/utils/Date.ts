export class DateUtils {
  parsedEpochToString(date: number) {
    return new Date(date).toLocaleTimeString();
  }
}

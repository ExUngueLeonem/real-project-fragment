export class FormatterUtils {
  static toCurrency(n: number) {
    const ruble = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    });

    return ruble.format(n);
  }
}

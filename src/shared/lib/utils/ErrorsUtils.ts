export class ErrorUtils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getErrorMessage(e: any) {
    console.warn("Try to resolve error ", e);

    if (Array.isArray(e?.data?.errors)) {
      return e?.data.errors.join(".");
    }

    if (e instanceof Error) {
      return e?.message;
    }

    if (e?.data?.detail) {
      return e?.data?.detail;
    }

    return "Нет подключения к серверу или к базе: " + JSON.stringify(e);
  }
}

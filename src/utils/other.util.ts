import moment from "moment";

export const loadCallback = <T extends (...P: any[]) => any>(
  cb?: T,
  ...data: Parameters<T>
): ReturnType<T> => {
  return cb && cb(...data);
};

/**
 * Hiện giá trị theo định dạng tiền tệ của US
 * @param number kiểu dữ liệu number
 */
export function currencyFormat(number: number) {
  // output: 5,000,000
  // return new Intl.NumberFormat("en-US").format(number);

  // output: 5.0000.000
  return new Intl.NumberFormat("en-DE").format(Math.round(number));
}

export function getFirstChar(str: string): string {
  return str.charAt(0);
}
export function local_date_t(
  key: string | null | undefined,
  opts?: {
    lang?: any;
    format?: string;
  }
): string {
  if (!key) return "";

  const tempLocale = moment(key);
  tempLocale.locale("vi");

  return tempLocale.format(opts?.format);
}
export function convertTagString(
  tagStr: string | undefined | null,
  config?: {
    seperator?: string;
  }
): string[] {
  if (!tagStr) return [];

  const seperator = config?.seperator || "|";
  let tags: string[] = tagStr.split(seperator);

  tags = tags.filter((tag) => {
    return !!tag.trim();
  });

  return tags;
}

export function loadToPage(path: string) {
  window.location.href = path;
}

export function capitalizeFirstLetter(str: string): string {
  return getFirstChar(str).toUpperCase() + str.slice(1);
}

// export function currencyUnitFormat(value: number, currency: string, hideSymbol?: boolean) {
//   const foundCur = CurrencyOptions.find((e) => e.id === currency);
//   return foundCur
//     ? new Intl.NumberFormat(foundCur?.locale || "en-US", {
//         style: !hideSymbol ? "currency" : "decimal",
//         currency: !hideSymbol ? currency : undefined,
//         minimumFractionDigits: value % 1 === 0 ? 0 : 2,
//       }).format(value)
//     : "0";
// }

// export function getCurrencySymbol(currency: string) {
//   const value = currencyUnitFormat(0, currency);
//   return value.replace(/\d|\.|,/g, "").trim();
// }

export const listener = (type: string, handler: Function, target: any = window) => {
  target.addEventListener(type, handler, { passive: false });
  return () => {
    target?.removeEventListener(type, handler);
  };
};

export function convertTv(alias: string, spaceTo?: string) {
  let str = alias || "";
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str.replace(/\s+/g, (s) => spaceTo || s);
}

/* eslint-disable */
import moment from "moment";
import Avatar from "@Assets/images/avt.png";
import { BASE_LINK_IMAGE } from "@Const";

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

export const currencyFormatToText = (number: any) => {
  //@ts-ignore
  if (number === 0) return;
  if (number > 1000000000) {
    return new Intl.NumberFormat("en-DE").format(number / 1000000000) + " tỷ";
  } else if (number > 1000000) {
    return new Intl.NumberFormat("en-DE").format(number / 1000000) + " triệu";
  } else {
    return new Intl.NumberFormat("en-DE").format(number / 1000) + " nghìn";
  }
};

export function currencyFormat(number: number) {
  // output: 5,000,000
  // return new Intl.NumberFormat("en-US").format(number);

  // output: 5.0000.000
  return new Intl.NumberFormat("en-DE").format(Math.round(number));
}

export const currencyFormatEnde = (number: number): string => {
  // output: 5.0000.000,0
  return new Intl.NumberFormat("en-DE").format(number);
};

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

export function checkLinkImage(link: string) {
  if (!link) {
    return;
  }
  return BASE_LINK_IMAGE + link;
}

export const renderErrorImage = (title?: any) => {
  const setDefaultImageAvatar = (e: any) => {
    e.target.src = Avatar;
  };

  const setDefaultImage = (e: any) => {
    // e.target.src = ;
  };

  switch (title) {
    case "avatar":
      return setDefaultImageAvatar;
    default:
      return setDefaultImage;
  }
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

export function debounce<T extends unknown[], U>(
  callback: (...args: T) => PromiseLike<U> | U,
  wait: number
) {
  let state:
    | undefined
    | {
        timeout: ReturnType<typeof setTimeout>;
        promise: Promise<U>;
        resolve: (value: U | PromiseLike<U>) => void;
        reject: (value: any) => void;
        latestArgs: T;
      } = undefined;

  return (...args: T): Promise<U> => {
    if (!state) {
      state = {} as any;
      state!.promise = new Promise((resolve, reject) => {
        state!.resolve = resolve;
        state!.reject = reject;
      });
    }
    clearTimeout(state!.timeout);
    state!.latestArgs = args;
    state!.timeout = setTimeout(() => {
      const s = state!;
      state = undefined;
      try {
        s.resolve(callback(...s.latestArgs));
      } catch (e) {
        s.reject(e);
      }
    }, wait);

    return state!.promise;
  };
}

export const onErrorImage = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  image: string
) => {
  event.currentTarget.src = image;
  event.currentTarget.className = "error";
};

export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      fontSize: "1.6rem",
      fontWeight: "bold",
    },
    children: `${name.split(" ")[0][0]}`,
  };
};

export const preventCharacter = (e: any) => {
  const { ctrlKey, key } = e;
  if (/[0-9]|Arrow|Backspace|Delete/.test(key) || (ctrlKey && /^a|c|v|x$/.test(key))) {
    return true;
  }
  e.preventDefault();
  return true;
};

export const preventNumber = (e: any) => {
  const { ctrlKey, key } = e;
  if (/^[0-9\.]|Arrow|Backspace|Delete$/.test(key)) {
    return true;
  }
  e.preventDefault();
  return true;
};

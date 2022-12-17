import { REGEX } from "@Const";

type TransformObjParam = {
  mainKey: string;
  data: object;
  mainIdx?: number;
  customKeyForm?: (input: {
    mainKey: string;
    key: string;
    mainIdx?: number;
    idx: number;
  }) => string;
};

export const FormDataUtil = {
  transformObjectFormData,
};

/**
 * mainKey: key in main object in form data
 *
 * chưa kiểm tra được những object có deep
 */
function transformObjectFormData(input: TransformObjParam): { [formKey: string]: any } {
  const temp: any = {};

  Object.entries(input.data).forEach(([k, v], i) => {
    let prop: string = `${input.mainKey}[${i}][${k}]`;
    if (input.customKeyForm) {
      prop = input.customKeyForm({
        mainKey: input.mainKey,
        key: k,
        idx: i,
        mainIdx: input.mainIdx,
      });
    }

    temp[prop] = v;
  });

  return temp;
}

export const logFormData = (form: FormData) => {
  const arr: any = form.entries();

  for (let pair of arr) {
    console.log(pair[0] + " - " + pair[1]);
  }
};

class FormUtils {
  Rule = {
    required: (errorMessage: string) => (value: any) =>
      value === undefined ||
      value === null ||
      value === "" ||
      (Array.isArray(value) && !value.length)
        ? errorMessage
        : undefined,
    numberOnly: (errorMessage: string) => (value: any) => {
      const reg = REGEX.NUMBER_ONLY;
      if ((!isNaN(value as any) && reg.test(value)) || value === "") {
        return undefined;
      }

      return errorMessage;
    },
    min:
      (
        min: number,
        config?: {
          errorMessage?: string;
        }
      ) =>
      (value: any) => {
        const message = config?.errorMessage || `Should be greater than ${min}`;
        return isNaN(value) || value >= min ? undefined : message;
      },
    max:
      (
        max: number,
        config?: {
          errorMessage?: string;
        }
      ) =>
      (value: any) => {
        const message = config?.errorMessage || `Should be less than ${max}`;
        return isNaN(value) || value <= max ? undefined : message;
      },
    maxLength:
      (
        max: number,
        config?: {
          errorMessage?: string;
        }
      ) =>
      (value: any) => {
        if (typeof value === "string") {
          const message = config?.errorMessage || `Should be greater than ${max}`;
          return value.length <= max ? undefined : message;
        }
        return undefined;
      },
    minLength:
      (
        min: number,
        config?: {
          errorMessage?: string;
        }
      ) =>
      (value: any) => {
        if (typeof value === "string") {
          const message = config?.errorMessage || `Should be greater than ${min}`;
          return value.length >= min ? undefined : message;
        }
        return undefined;
      },
    pattern:
      (
        pattern: RegExp,
        config?: {
          errorMessage?: string;
        }
      ) =>
      (value: any) => {
        if (value === "" || value === undefined) {
          return undefined;
        }

        return pattern.test(value) ? undefined : config?.errorMessage || "Value is not valid";
      },
  };

  composeValidators =
    (validators: ((value: any) => (string | undefined) | Promise<string | undefined>)[]) =>
    (value: any) =>
      validators.reduce((error, validator) => error || validator(value), undefined as any);
}

export const FormUtil = new FormUtils();

const NUMBER_ONLY = /^[0-9\s]*$/;
const PHONE_NUMBER = /^\d+$/;
// eslint-disable-next-line
const EMAIL =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const UPPERCASE = /[A-Z]/;
const DIGITS = /[0-9]/;
const SPECIAL_CHARACTER = /[!@#$%^&*(),.?":{}|<>]/;
const CHARACTER_LENGTH = /.{8,}/;
const PASSWORD = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
const NUMBER_CHARACTER = /^[0-9\s*,-]*$/;
const DATE_FORMAT =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

export const REGEX = {
  NUMBER_ONLY,
  PHONE_NUMBER,
  EMAIL,
  UPPERCASE,
  DIGITS,
  SPECIAL_CHARACTER,
  CHARACTER_LENGTH,
  PASSWORD,
  NUMBER_CHARACTER,
  DATE_FORMAT,
};

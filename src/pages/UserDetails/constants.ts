import messages from "./messages";

export const MIN_NAME_LENGTH = 1;
export const MAX_NAME_LENGTH = 20;
export const MAX_USERNAME_LENGTH = 10;

export const isNotMinCharacters = (value: string, charCount: number): boolean =>
  !value || value.length < charCount;
export const isEmpty = (value: string | number | boolean): boolean => {
  if (typeof value === "string") {
    return !value || value.trim() === "";
  }
  return !value;
};
export const isMoreThanMaxCharacters = (
  value: string,
  charCount: number
): boolean => (value ? value.length > charCount : false);

export interface IValidationFunction {
  (value: string): string[];
}
export const isValidName: IValidationFunction = (value) => {
  const errors = [];
  isEmpty(value) &&
    errors.push(messages.validationMessages.isRequired.defaultMessage);
  isNotMinCharacters(value, MIN_NAME_LENGTH) &&
    errors.push(messages.form.tooShort.defaultMessage);
  isMoreThanMaxCharacters(value, MAX_NAME_LENGTH) &&
    errors.push(messages.form.titleTooLong.defaultMessage);
  return errors;
};

export const isValidUserName: IValidationFunction = (value) => {
  const errors = [];
  isEmpty(value) &&
    errors.push(messages.validationMessages.isRequired.defaultMessage);
  isMoreThanMaxCharacters(value, MAX_USERNAME_LENGTH) &&
    errors.push(messages.form.descTooLong.defaultMessage);
  return errors;
};

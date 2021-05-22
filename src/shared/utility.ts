import messages from "./messages";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

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
const isValidName: IValidationFunction = (value) => {
  const errors = [];
  isEmpty(value) &&
    errors.push(messages.validationMessages.isRequired.defaultMessage);
  isNotMinCharacters(value, MIN_NAME_LENGTH) &&
    errors.push(messages.validationMessages.tooShort.defaultMessage);
  isMoreThanMaxCharacters(value, MAX_NAME_LENGTH) &&
    errors.push(messages.validationMessages.titleTooLong.defaultMessage);
  return errors;
};

const isValidUserName: IValidationFunction = (value) => {
  const errors = [];
  isEmpty(value) &&
    errors.push(messages.validationMessages.isRequired.defaultMessage);
  isMoreThanMaxCharacters(value, MAX_USERNAME_LENGTH) &&
    errors.push(messages.validationMessages.descTooLong.defaultMessage);
  return errors;
};

// export const VALIDATIONS = {
//   firstName: isValidName,
//   lastName: isValidName,
//   userName: isValidUserName,
// };

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isValidName) {
    isValid = isValidName && isValid;
  }
  if (rules.isValidUserName) {
    isValid = isValidUserName && isValid;
  }

  return isValid;
};

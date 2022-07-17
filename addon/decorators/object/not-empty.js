import { IsNotEmptyObject } from 'class-validator';

export function vObjectNotEmpty(...args) {
  return IsNotEmptyObject(...args);
}

export {
  vObjectNotEmpty as objectNotEmpty,
  vObjectNotEmpty as validatableObjectNotEmpty,
};

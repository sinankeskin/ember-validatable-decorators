import { IsInstance } from 'class-validator';

export function vObjectInstance(targetType, validationOptions) {
  return IsInstance(targetType, validationOptions);
}

export {
  vObjectInstance as objectInstance,
  vObjectInstance as validatableObjectInstance,
};

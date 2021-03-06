import { IsInstance } from 'class-validator';

export function vObjectInstance(...args) {
  return IsInstance(...args);
}

export {
  vObjectInstance as instance,
  vObjectInstance as objectInstance,
  vObjectInstance as validatableObjectInstance,
};

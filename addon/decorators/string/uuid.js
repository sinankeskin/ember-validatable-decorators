import { IsUUID } from 'class-validator';

export function vStringUUID(...args) {
  return IsUUID(...args);
}

export {
  vStringUUID as uuid,
  vStringUUID as stringUUID,
  vStringUUID as validatableStringUUID,
};

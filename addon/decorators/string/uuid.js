import { IsUUID } from 'class-validator';

export function vStringUUID(version, validationOptions) {
  return IsUUID(version, validationOptions);
}

export { vStringUUID as stringUUID, vStringUUID as validatableStringUUID };

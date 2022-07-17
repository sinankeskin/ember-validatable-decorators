import { IsMongoId } from 'class-validator';

export function vStringMongoId(validationOptions) {
  return IsMongoId(validationOptions);
}

export {
  vStringMongoId as stringMongoId,
  vStringMongoId as validatableStringMongoId,
};

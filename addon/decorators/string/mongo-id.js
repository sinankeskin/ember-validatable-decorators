import { IsMongoId } from 'class-validator';

export function vStringMongoId(...args) {
  return IsMongoId(...args);
}

export {
  vStringMongoId as stringMongoId,
  vStringMongoId as validatableStringMongoId,
};

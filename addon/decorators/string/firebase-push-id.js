import { IsFirebasePushId } from 'class-validator';

export function vStringFirebasePushId(validationOptions) {
  return IsFirebasePushId(validationOptions);
}

export {
  vStringFirebasePushId as stringFirebasePushId,
  vStringFirebasePushId as validatableStringFirebasePushId,
};

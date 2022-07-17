import { IsFirebasePushId } from 'class-validator';

export function vStringFirebasePushId(...args) {
  return IsFirebasePushId(...args);
}

export {
  vStringFirebasePushId as firebasePushId,
  vStringFirebasePushId as stringFirebasePushId,
  vStringFirebasePushId as validatableStringFirebasePushId,
};

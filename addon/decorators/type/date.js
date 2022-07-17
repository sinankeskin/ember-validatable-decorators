import { IsDate } from 'class-validator';

export function vTypeDate(...args) {
  return IsDate(...args);
}

export {
  vTypeDate as date,
  vTypeDate as typeDate,
  vTypeDate as validatableTypeDate,
};

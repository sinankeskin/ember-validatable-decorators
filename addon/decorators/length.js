import { Length } from 'class-validator';

export function length(min, max, validationOptions) {
  return Length(min, max, validationOptions);
}

export default {
  length,
};

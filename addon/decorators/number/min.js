import { Min } from 'class-validator';

export function vNumberMin(...args) {
  return Min(...args);
}

export {
  vNumberMin as min,
  vNumberMin as numberMin,
  vNumberMin as validatableNumberMin,
};

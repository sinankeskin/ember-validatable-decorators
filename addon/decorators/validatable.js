import { resolve, reject } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import { validate, validateOrReject, validateSync } from 'class-validator';

function validatable(Class) {
  return class ValidatableClass extends Class {
    @tracked isValidated = false;

    get isValid() {
      return this.errors.length === 0;
    }

    async validate(options = {}) {
      try {
        const errors = await validate(this, options);
        this._populateErrors(errors);
      } finally {
        this.isValidated = true;
      }
      return resolve(this.isValid);
    }

    async validateOrReject(options = {}) {
      try {
        await validateOrReject(this, options);
        this.errors.clear();
      } catch (errors) {
        this._populateErrors(errors);
      } finally {
        this.isValidated = true;
      }
      return this.isValid ? resolve(true) : reject(false);
    }

    validateSync(options = {}) {
      const errors = validateSync(this, options);
      this._populateErrors(errors);
      this.isValidated = true;
      return this.isValid;
    }

    _populateErrors(errors) {
      errors.forEach(({ property, constraints }) => {
        this.errors.add(property, Object.values(constraints));
      });
    }
  };
}

export default validatable;

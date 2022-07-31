ember-validatable-decorators
==============================================================================

Add validations to your ember data models and/or POJOs easily.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-validatable-decorators
```


Usage
------------------------------------------------------------------------------

To use validatable decorators you must addd @validatable decorators to your Model or POJO class first. This decorators add 3 methods to the class.
`validate`, `validateOrReject` and `validateSync`

This addon uses [class-validator](https://github.com/typestack/class-validator) under the hood but more ember way.


```
I'll list all available decorators here when I have freetime but in the mean time you can the code.
```


```js
import {
  validatable,
  min,
  max,
  contains,
  int,
  email,
  fqdn,
  date,
  length,
} from 'ember-validatable-decorators';
import { attr } from '@ember-data/model';
import Model from '@ember-data/model';

@validatable
export default class PostModel extends Model {
  @length(10, 20)
  @attr('string')
  title;

  @contains('hello')
  @attr('string')
  text;

  @int()
  @min(0)
  @max(10)
  @attr('number')
  rating;

  @email()
  @attr('string')
  email;

  @fqdn()
  @attr('string')
  site;

  @date()
  @attr('datetime')
  createDate;
}
```

To check if model or POJO valid or not just need to call one of these 3 methods like this:

```js
import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @action
  validate() {
    this.model.validate();
  }
}
```

And this call populates errors field in the model or POJO. You check check and display errors like this:

```hbs

{{concat 'isValidated:' this.model.isValidated}}

{{#if this.model.isValid}}
  <p>Valid</p>
{{else}}
  <p>Invalid</p>
{{/if}}

{{#each this.model.errors as |error|}}
  <div class='error'>
    {{error.message}}
  </div>
{{/each}}

<hr />

{{#each this.model.errors.rating as |error|}}
  <div class='error'>
    {{error.message}}
    <br />
  </div>
{{/each}}

<button type='button' {{on 'click' this.validate}}>
  Validate
</button>
````



Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

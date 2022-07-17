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

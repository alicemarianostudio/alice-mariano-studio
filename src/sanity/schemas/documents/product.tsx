import { defineType } from 'sanity';
import {
  TITLE_FIELD,
  SLUG_FIELD,
  IMAGE_FIELD,
  URL_FIELD,
} from '../fields/globals';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [TITLE_FIELD, SLUG_FIELD, URL_FIELD, IMAGE_FIELD],
});

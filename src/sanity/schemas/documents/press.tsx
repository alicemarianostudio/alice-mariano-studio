import { defineType } from 'sanity';
import { IMAGE_FIELD, TITLE_FIELD, TEXT_FIELD, URL_FIELD } from '../fields/globals';

export const press = defineType({
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    TITLE_FIELD,
    IMAGE_FIELD,
    URL_FIELD,
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});

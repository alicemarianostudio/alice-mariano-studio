import { defineType } from 'sanity';
import { TITLE_FIELD } from '../fields/globals';

export const terms = defineType({
  name: 'terms',
  title: 'Terms of Service',
  type: 'document',
  fields: [
    TITLE_FIELD,
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});

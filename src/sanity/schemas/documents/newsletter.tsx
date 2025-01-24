import { defineField, defineType } from 'sanity';
import { TITLE_FIELD } from '../fields/globals';

export const newsletter = defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    TITLE_FIELD,
    defineField({
      name: 'calendar',
      title: 'Calendar',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subCollection' }] }],
    }),
  ],
});

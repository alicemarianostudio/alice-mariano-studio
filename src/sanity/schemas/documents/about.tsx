import { defineType } from 'sanity';
import { IMAGE_FIELD, TITLE_FIELD } from '../fields/globals';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    TITLE_FIELD,
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    IMAGE_FIELD,
  ],
});

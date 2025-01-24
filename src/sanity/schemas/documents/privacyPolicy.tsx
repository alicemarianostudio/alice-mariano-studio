import { defineType } from 'sanity';
import { TITLE_FIELD } from '../fields/globals';

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
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

import { defineField, defineType } from 'sanity';
import { TITLE_FIELD, IMAGE_FIELD } from '../fields/globals';

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    TITLE_FIELD,
    {
      name: 'homepageEntries',
      title: 'Entries',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'entries',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            IMAGE_FIELD,
            {
              title: 'Url',
              name: 'url',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: true,
                }),
            },
            {
              title: 'Has a headline inside the image as the title',
              name: 'headlineTitle',
              type: 'boolean',
              initialValue: true,
            },
            {
              title: 'Has a paragraph below the image as the title',
              name: 'headlineSubtitle',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
});

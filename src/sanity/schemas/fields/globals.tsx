import { defineField } from 'sanity';

export const TITLE_FIELD = defineField({
  name: 'title',
  title: 'Title',
  type: 'string',
});

export const TEXT_FIELD = defineField({
  name: 'text',
  title: 'Text',
  type: 'string',
});

export const SLUG_FIELD = defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  description: 'This is the part of the url that serves as identifier.',
  validation: (rule) => rule.required(),
  options: {
    source: 'title',
    maxLength: 96,
  },
});

export const IMAGE_FIELD = defineField({
  name: 'image',
  title: 'Image',
  type: 'image',
});

export const PRICE_FIELD = defineField({
  name: 'price',
  title: 'Price',
  type: 'number',
  validation: (Rule) => Rule.required().min(0),
});

export const URL_FIELD = defineField({
  title: 'Url',
  name: 'url',
  type: 'url',
});

export const RELATIVE_URL_FIELD = defineField({
  title: 'Url',
  name: 'url',
  type: 'url',
  validation: (Rule) =>
    Rule.uri({
      allowRelative: true,
    }),
});

export const BLOCK_CONTENT_FIELD = defineField({
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [{ type: 'block' }],
});

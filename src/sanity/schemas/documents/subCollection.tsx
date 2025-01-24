import { defineType, defineField } from 'sanity';
import { TITLE_FIELD, IMAGE_FIELD, SLUG_FIELD } from '../fields/globals';

export const subCollection = defineType({
  name: 'subCollection',
  title: 'Subcollection',
  type: 'document',
  fields: [
    TITLE_FIELD,
    IMAGE_FIELD,
    defineField({
      name: 'coverImg',
      title: 'Cover Image',
      type: 'image',
      description: 'Currently used for newsletters only.',
    }),
    SLUG_FIELD,
    defineField({
      title: 'Description',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Currently used for newsletters only',
    }),
    defineField({
      name: 'archive', // Unique field name
      type: 'boolean',    // Field type
      title: 'Archive', // Display title
      description: 'Mark this as true if you want to archive this entry.',
      options: {
        layout: 'checkbox', // Optional: Display as a checkbox
      }}),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    }),
  ],
});

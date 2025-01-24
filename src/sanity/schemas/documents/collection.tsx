import { defineType, defineField } from 'sanity';
import { TITLE_FIELD, IMAGE_FIELD, SLUG_FIELD } from '../fields/globals';

export const collection = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    TITLE_FIELD,
    SLUG_FIELD,
    IMAGE_FIELD,
    defineField({
      name: 'collections',
      title: 'Subcollections',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'subCollection' } }],
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context?.document?.products && value) {
            return 'You cannot have both subcollections and products in the same main collection.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context?.document?.subCollections && value) {
            return 'You cannot have both subcollections and products in the same main collection.';
          }
          return true;
        }),
    }),
  ],
});

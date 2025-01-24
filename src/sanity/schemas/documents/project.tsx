import { defineType } from 'sanity';
import { IMAGE_FIELD, TITLE_FIELD } from '../fields/globals';

export const project = defineType({
  type: 'document',
  title: 'Project',
  name: 'project',
  fields: [TITLE_FIELD, IMAGE_FIELD],
});

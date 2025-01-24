export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Collection Link',
      name: 'collectionLink',
      description: 'Select pages for navigation',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'collection' }] }],
    },
    {
      name: 'internalUrl',
      title: 'Internal URL',
      type: 'string',
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
    },
  ],
};

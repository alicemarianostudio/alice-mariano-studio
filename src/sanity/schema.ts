import { type SchemaTypeDefinition } from 'sanity';
import { homepage } from './schemas/documents/homepage';
import { product } from './schemas/documents/product';
import { collection } from './schemas/documents/collection';
import { subCollection } from './schemas/documents/subCollection';
import { about } from './schemas/documents/about';
import navigation from './schemas/documents/navigation';
import navItem from './schemas/objects/navItem';
import link from './schemas/objects/link';
import { newsletter } from './schemas/documents/newsletter';
import { project } from './schemas/documents/project';
import { press } from './schemas/documents/press';
import { privacyPolicy } from './schemas/documents/privacyPolicy';
import { terms } from './schemas/documents/terms';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    product,
    collection,
    subCollection,
    about,
    navigation,
    navItem,
    link,
    newsletter,
    project,
    press,
    privacyPolicy,
    terms,
  ],
};

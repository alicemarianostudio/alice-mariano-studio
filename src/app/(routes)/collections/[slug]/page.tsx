import type { Metadata, ResolvingMetadata } from 'next';

import { collectionBySlugQuery } from '@/sanity/queries/collection';
import { client } from '@/sanity/lib/client';
import { Product as ProductType } from '@/sanity/types';

import { SubCollection } from '@/components/SubCollection';
import { Product } from '@/components/Product';

import { paramsIntoText } from '../../utils/strings';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params?.slug;
  const translatedSlug = paramsIntoText(slug);

  return {
    title: `Alice Mariano | ${translatedSlug ?? ''}`,
  };
}

export default async function CollectionBySlug({
  params,
}: {
  params: { slug: string };
}) {
  const collection = await client.fetch(
    collectionBySlugQuery,
    {
      slug: params.slug,
    },
    { next: { revalidate: 60 } }
  );

  if (!params || !params.slug || !collection) {
    return null;
  }

  // Renders a subcollection: Big picture + children products
  if (collection?.collections) return <SubCollection collection={collection} />;

  // Renders a main collection: Just products
  return (
    <section className="container grid grid-cols-1 md:grid-cols-4 p-3 pt-10 justify-center flex-wrap mx-auto gap-8">
      {collection?.products?.map((p: ProductType, index: number) => (
        <Product
          key={`${collection.slug.current}__product--${p.title}`}
          title={p.title}
          image_url={p.image_url}
          url={p.url}
          position={index}
        />
      ))}
    </section>
  );
}

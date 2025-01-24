import { Metadata } from 'next';
import { PortableText } from 'next-sanity';

import { client } from '@/sanity/lib/client';
import { subCollectionsBySlugQuery } from '@/sanity/queries/subCollection';
import { Product as ProductType } from '@/sanity/types';

import { Product } from '@/components/Product';
import { newsletter } from '@/sanity/schemas/documents/newsletter';

export const metadata: Metadata = {
  title: 'Alice Mariano Studio | Newsletter',
};

export default async function NewsletterDetails({
  params,
}: {
  params: { slug: string };
}) {
  const newsletterMonth = await client.fetch(subCollectionsBySlugQuery, {
    slug: params.slug,
  });

  if (!params || !params.slug || !newsletterMonth) {
    return null;
  }

  return (
    <main>
      <div>
        <section
          className="flex items-center justify-center w-screen min-h-[300px] md:min-h-[500px] h-[20vh] md:h-[50vh] lg:min-h-[1000px] bg-no-repeat bg-contain lg:h-[70vh] lg:bg-cover z-10 bg-center"
          style={{
            backgroundImage: `url(${newsletterMonth.cover_url})`,
          }}
        >
          <h1 className="accent-font text-4xl lg:text-6xl text-white">
            {newsletterMonth.title}
          </h1>
        </section>
      </div>
      <section className="container mx-auto flex flex-col justify-center flex-wrap p-4 mx-auto gap-8 py-5">
        {newsletterMonth.content && (
          <div className="max-w-[50rem] mx-auto lg:text-center pb-4 portable-text newsletter-text">
            <PortableText value={newsletterMonth?.content} />
          </div>
        )}
      </section>
      <section className="container px-4 flex justify-center grid grid-cols-2 lg:grid-cols-4 mx-auto gap-8 min-h-[75dvh]">
        {newsletterMonth?.products?.map((p: ProductType) => {
          console.log('news', newsletterMonth)
          return (
            <Product key={p._id} image_url={p.image_url} url={p.url} title={p.title} />
          )
        }
        )}
      </section>
    </main>
  );
}

import FeaturedImage from '@/components/FeaturedImage';

import { client } from '@/sanity/lib/client';
import { homepageQuery } from '@/sanity/queries/homepage';

import { Homepage } from '@/sanity/types';

export default async function Home() {
  const { homepageEntries } = await client.fetch(
    homepageQuery,
    {},
    { next: { revalidate: 60 } }
  );

  if (!homepageEntries) {
    return null;
  }

  return (
    <main className="container mx-auto w-full max-w-[2600px] px-8 pt-10 lg:pt-6 p-6">
      <section className="homepage flex flex-wrap items-center justify-center">
        {homepageEntries &&
          homepageEntries.map(
            (
              {
                url,
                title,
                image_url,
                headlineTitle,
                headlineSubtitle,
              }: Homepage,
              index: number
            ) => (
              <FeaturedImage
                key={title}
                title={title}
                imageUrl={image_url}
                url={url}
                position={index}
                headlineTitle={headlineTitle}
                headlineSubtitle={headlineSubtitle}
              />
            )
          )}
      </section>
    </main>
  );
}

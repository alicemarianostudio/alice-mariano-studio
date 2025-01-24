import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';

import { privacyPolicyQuery } from '@/sanity/queries/privacyPolicy';

export const metadata: Metadata = {
  title: 'Alice Mariano Studio | Privacy Policy',
};

export default async function PrivacyPolicy() {
  const data = await client.fetch(
    privacyPolicyQuery,
    {},
    { next: { revalidate: 60 } }
  );

  if (!data) {
    return null;
  }

  return (
    <main className="container mx-auto lg:py-8 px-4 flex flex-col gap-4 min-h-[75dvh]">
      {/* <h1 className="primary-font text-3xl capitalize">Privacy Policy</h1> */}
      <section className="lg:columns-2 gap-12 text-xl portable-text portable-small">
        <PortableText value={data?.content} />
      </section>
    </main>
  );
}

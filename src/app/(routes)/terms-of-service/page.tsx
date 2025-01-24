import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';

import { termsQuery } from '@/sanity/queries/terms';

export const metadata: Metadata = {
  title: 'Alice Mariano Studio | Terms and conditions',
};

export default async function TermsAndConditions() {
  const data = await client.fetch(termsQuery, {}, { next: { revalidate: 60 } });

  if (!data) {
    return null;
  }

  return (
    <main className="container mx-auto lg:py-8 px-4 flex flex-col gap-4 min-h-[75dvh]">
      {/* <h1 className="primary-font text-3xl capitalize">Terms of Service</h1> */}
      <section className="lg:columns-2 gap-12 text-xl portable-text portable-small">
        <PortableText value={data?.content} />
      </section>
    </main>
  );
}

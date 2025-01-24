import { client } from "@/sanity/lib/client";
import { newsletterQuery } from "@/sanity/queries/newsletter";

import { Calendar } from "@/sanity/types";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alice Mariano Studio | Newsletter",
};

export default async function Newsletter() {
  const { calendar } = await client.fetch(
    newsletterQuery,
    {},
    { next: { revalidate: 60 } }
  );

  if (!calendar) {
    return null;
  }

  const filteredCalendar = calendar.filter((c: Calendar) => !c.archived);

  return (
    <main className="container mx-auto flex flex-col items-center gap-2">
      <section className="w-full h-full md:p-8">
        <div id="omnisend-embedded-v2-66da313d65ccd578f59ff98b"></div>
      </section>
      
      <section className="grid grid-cols-2 lg:grid-cols-3 w-fit gap-4 sm:gap-8 w-full px-4">
        {filteredCalendar?.map((c: Calendar, index: number) => {
          return (
            <Link
              className="text-center opacity-0 animate-fadeIn transition-opacity duration-700 ease-in-out"
              key={c._id}
              href={`/newsletter/${c.slug?.current}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="relative h-[300px] md:h-[450px] w-[100%] lg:h-[450px] p-">
                <Image layout="fill" src={c.image_url} alt={c.title} />
              </div>
              <p className="py-4 text-xl">{c.title}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}

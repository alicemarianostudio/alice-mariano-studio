import { PortableText } from "next-sanity";
import Image from "next/image";
import { Metadata } from "next";

import { pressQuery } from "@/sanity/queries/press";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Alice Mariano Studio | Press",
};

export default async function Press() {
  const data = await client.fetch(pressQuery, {}, { next: { revalidate: 60 } });

  if (!data) {
    return "hi";
  }

  return (
    <main className="container mx-auto flex flex-col gap-8 items-center px-4 lg:p-4 mt-10">
      <p className="text-center">
        For press inquiries please contact{" "}
        <a href="mailto:alicemarianostudio@gmail.com">
          alicemarianostudio@gmail.com
        </a>
      </p>

      <div className="flex w-fit gap-4 sm:gap-8 w-full px-4 justify-center">
        {data?.map((c: any, index: number) => (
          <a href={c.url} key={index} className="text-center" target="blank">
            <Image
              alt={c.title ?? "Press"}
              src={c.image_url}
              width={300}
              height={200}
            />
            <section className="text-center portable-text mt-4">
              <PortableText value={c.content} />
            </section>
          </a>
        ))}
      </div>
    </main>
  );
}

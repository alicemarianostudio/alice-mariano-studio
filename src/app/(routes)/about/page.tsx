import { client } from "@/sanity/lib/client";
import { aboutQuery } from "@/sanity/queries/about";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alice Mariano Studio | About",
};

export default async function About() {
  const data = await client.fetch(aboutQuery, {}, { next: { revalidate: 60 } });

  if (!data) {
    return null;
  }

  return (
    <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center px-10">
      <h1 className="accent-font primary-pink text-[7rem] lg:hidden text-center mb-[-50px]">
        Alice
      </h1>
      <section className="h-[350px] sm:h-[55rem] lg:h-[50rem] w-full mx-auto relative md:mt-20 w-[230px] sm:w-[100%]">
        <h1 className="absolute hidden lg:grid z-10 inset-0 lg:-top-32 flex justify-center text-[10rem] accent-font primary-pink">
          Alice
        </h1>
        <Image
          sizes="cover"
          src={data?.image_url}
          layout="fill"
          alt="Alice photo"
          className="justify-self-end alice-photo"
        />
      </section>
      <section className="mt-2 md:mt-[80px] portable-text">
        <PortableText value={data?.content} />
      </section>
    </main>
  );
}

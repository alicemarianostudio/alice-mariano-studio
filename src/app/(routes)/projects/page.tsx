import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/queries/project';

import { Project } from '@/components/Project';
import { Project as ProjectType } from '@/sanity/types';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alice Mariano Studio | Projects',
};

export default async function Projects() {
  const data = await client.fetch(projectsQuery);

  if (!data) {
    return null;
  }

  return (
    <main className="container mx-auto flex place-content-center p-4 mt-10">

      <section className="flex flex-row md:gap-12 gap-8 flex-wrap place-content-center w-[100%]">
        {data &&
          data.map((p: ProjectType, index: number) => (
            <Project
              key={p.title}
              image_url={p.image_url}
              title={p.title}
              index={index}
            />
          ))}
      </section>
    </main>
  );
}

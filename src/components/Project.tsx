import Image from 'next/image';
import { Project as ProjectType } from '@/sanity/types';

export const Project = ({ image_url, title, index }: ProjectType) => {
  return (
    <article
      className="basis-1/3 md:basis-1/4 max-w-[50%] md:max-w-[calc(100%/3)] lg:max-w-[calc(100%/4)] flex-1 odd:md:mt-24 flex flex-col gap-2 text-center opacity-0 
    animate-fadeIn transition-opacity duration-700 ease-in-out project-image text-center"
      style={{ animationDelay: `${index && index * 0.3}s` }}
    >
      <Image src={image_url} alt={title} height={200} width={300} />
      <p>{title}</p>
    </article>
  );
};

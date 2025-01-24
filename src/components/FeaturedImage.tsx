import Link from "next/link";

export default function FeaturedImage({
  url,
  imageUrl,
  title,
  position,
  headlineTitle,
  headlineSubtitle,
}: {
  url: string;
  title: string;
  imageUrl: string;
  position: number;
  headlineTitle: boolean;
  headlineSubtitle: boolean;
}) {
  return (
    <Link
      href={url}
      className={`home-card md:odd:w-1/3 md:w-1/3 w-full pb-10 px-5 lg:pb-8 md:mb-10 even:h-[130vw] h-[90vw] md:h-[40vw] even:md:h-[55vw] lg:h-[36vw] even:lg:h-[45vw] flex items-center justify-center opacity-0 animate-fadeIn transition-opacity duration-700 ease-in-out hover:no-underline`}
      style={{ animationDelay: `${position * 0.3}s` }}
    >
      <div className="h-full xl:w-[90%] w-full flex flex-col">
        <article
          className="w-full h-full text-white text-4xl md:text-3xl lg:text-5xl xl:text-6xl flex p-4 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "center bottom",
          }}
        >
          {headlineTitle && <h1 className="text-wrap w-40 ">{title}</h1>}
        </article>
        <p className="w-full p-2 text-center home-text">
          {headlineSubtitle && title}
        </p>
      </div>
    </Link>
  );
}

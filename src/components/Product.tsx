import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Product as ProductType } from "@/sanity/types";

export function Product({ title, image_url, url, position }: ProductType) {
  return (
    <Link
      className="product flex flex-col gap-4 items-center h-auto px-[8px] pb-4 sm:px-[13px]  lg:px-[20px]  border-t-[1px] border-black"
      href={url ? url : "/"}
      target="_blank"
      style={{ animationDelay: `${position ? position * 0.3 : 0}s` }}
    >
      <p className="uppercase my-2 text-center hover:underline text-sm">
        {title}
      </p>
      <Image
        className="object-cover"
        alt={title}
        width={200}
        height={200}
        src={image_url}
      />
    </Link>
  );
}

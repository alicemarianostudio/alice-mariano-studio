"use client";

import { useState, useLayoutEffect, useRef, RefObject, useEffect } from "react";
import { Plus } from "@/assets/svg/Plus";
import { Minus } from "@/assets/svg/Minus";

import { Collection } from "@/sanity/types";

import { Product } from "./Product";

export function SubCollection({ collection }: { collection: Collection }) {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [panelHeight, setPanelHeight] = useState<number>(0);

  const ref: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (ref.current && selectedImageId) {
      setTimeout(() => {

        if (ref.current) {
        setPanelHeight(ref?.current?.offsetHeight as number);
  
        if (ref.current.clientHeight > 25) {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
      }, 500);
    }
  }, [selectedImageId]);

  const handleImageClick = (id: string | null) => {
    setSelectedImageId((prevId) => (prevId === id ? null : id));
  };

  const handleBoxShadow = (id: string | null) => {
    const inset = "inset 0 0 0 2000px rgba(211, 211, 211, 0.5)";

    if (selectedImageId) {
      if (selectedImageId === id) {
        return "none";
      }
      return inset;
    }
    return "none";
  };

  return (
    <section className="grid sm:grid-cols-3 relative overflow-hidden">
      {collection?.collections &&
        collection?.collections.map((c, index) => (
          <>
            <section
              key={`subcollection__${c._id}`}
              // className={`opacity-0 animate-fadeIn transition-opacity duration-700 ease-in-out`}
              style={{
                paddingBottom: `${selectedImageId === c._id ? panelHeight : 0}px`,
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <div
                className="h-[40rem] cursor-pointer flex justify-end items-end p-4"
                style={{
                  background: `url(${c.image_url}) center / cover no-repeat`,
                  boxShadow: handleBoxShadow(c._id),
                }}
                key={`subcollection__${collection.slug.current}--${c._id}`}
                onClick={() => handleImageClick(c._id)}
              >
                {selectedImageId === c._id ? <Minus /> : <Plus />}
              </div>
              {selectedImageId === c._id && (
                <div
                  ref={ref}
                  className="absolute box-border grid grid-cols-2 md:grid-cols-4 left-0 flex w-[100vw] flex-wrap gap-4 justify-center px-[8px] pt-[25px] transition duration-300 sm:px-[13px] lg:px-[20px]"
                >
                  {c.products &&
                    c.products.map((p, index) => (
                      <Product
                        key={`subcollection__${collection.slug.current}-${p.title}`}
                        title={p.title}
                        image_url={p.image_url}
                        url={p.url}
                        position={index}
                      />
                    ))}
                </div>
              )}
            </section>
          </>
        ))}
    </section>
  );
}

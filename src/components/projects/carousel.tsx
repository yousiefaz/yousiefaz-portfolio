"use client";

import { urlFor } from "@/sanity/lib/image";
import { Loader } from "lucide-react";
import Image from "next/image";
import { FC, Suspense, useState } from "react";
import { CarouselProps } from "@/types/interfaces";

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<string>(
    urlFor(images[0]).url()
  );

  return (
    <div className="space-y-2">
      <Image
        src={currentImage}
        width={720}
        height={720}
        alt="image"
        className="w-full max-h-[30rem] shadow"
      />
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <Suspense key={index} fallback={<Loader className="animate-spin" />}>
            <div className="w-full max-h-28 overflow-hidden">
              <Image
                src={urlFor(image).url()}
                width={240}
                height={240}
                alt="image"
                className="opacity-60 hover:opacity-100 hover:scale-105 cursor-pointer transition"
                onClick={() => setCurrentImage(urlFor(image).url())}
              />
            </div>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

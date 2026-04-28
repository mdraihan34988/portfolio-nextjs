import React from 'react'
import Image from "next/image";

 function OgImage({ src, alt, darkSrc }) {

  return (
    <div className="relative w-full shrink-0 overflow-hidden rounded-md border border-gray-100 bg-gray-50 shadow-sm before:absolute before:inset-0 before:z-10 dark:border-gray-800 dark:bg-gray-950 dark:before:bg-black/10">
      <Image
        title={alt}
        alt={alt}
        src={src}
        width={1200}
        height={630}
        layout="responsive"
        placeholder="blur"
        objectFit="contain"
        blurDataURL={src}
        quality={50}
        className="lg:group-hover:scale-110 transition-all duration-300 backdrop-blur-xl"
      />
    </div>
  );
}

export default OgImage;

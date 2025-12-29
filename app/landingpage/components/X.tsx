import React from "react";
import Image from "next/image";

interface Xprops {
  className?: string;
}

export default function X(props: Xprops) {
  return (
    <Image
      priority
      src="/X-hero.webp"
      height={600}
      width={700}
      alt="TEDx X Logo"
      sizes="(max-width: 768px) 100vw, 50vw"
      className={props.className}
    />
  );
}

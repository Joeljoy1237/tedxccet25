"use client";

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/3D/Lanyard"), {
  ssr: false,
});

interface Xprops {
  className?: string;
}
console.log("hiiiiiiiii");
import { Suspense } from "react";

export default function X(props: Xprops) {
  return (
    <div className={`${props.className} relative h-full w-full`}>
      <Suspense fallback={<div className="text-white text-center">Loading 3D...</div>}>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </Suspense>
    </div>
  );
}

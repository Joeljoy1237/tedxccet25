"use client";

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/3D/Lanyard"), {
  ssr: false,
});

interface Xprops {
  className?: string;
}

import { Suspense, useEffect, useState } from "react";

export default function X(props: Xprops) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className={`${props.className} relative h-full w-full`}>
      <Suspense fallback={<div className="text-white text-center">Loading 3D...</div>}>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </Suspense>
    </div>
  );
}

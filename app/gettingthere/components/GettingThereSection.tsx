"use client";

import TitleBar from "@/components/TitleBar";
import React from "react";
import ContactDetails from "./ContactDetails";
import Form from "./Form";
import dynamic from "next/dynamic";

export default function GettingThereSection() {
  // Dynamically import Map to avoid SSR issues with iframes if any, generally good practice for heavy third-party embeds
  const Map = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
      <div className="h-[450px] w-full bg-neutral-900 animate-pulse rounded-2xl"></div>
    ),
  });

  return (
    <section className="py-24 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="items-center justify-center flex">
          <TitleBar title="Getting" titleSecond="There" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <ContactDetails />
          <Form />
        </div>

        <div className="w-full mt-8">
          <Map />
        </div>
      </div>
    </section>
  );
}

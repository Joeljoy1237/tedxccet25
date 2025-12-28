import React from "react";

interface TitleBarProps {
  title: string;
  titleSecond: string;
}

export default function TitleBar({ title, titleSecond }: TitleBarProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold uppercase text-white tracking-tighter mb-4 text-center">
        {title} <span className="text-red-600">{titleSecond}</span>
      </h1>
    </div>
  );
}

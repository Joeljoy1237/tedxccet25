import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
}

export default function Button({
  title,
  onClick,
  className = "",
  icon,
  position = "right",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${className}`}
    >
      {position === "left" && icon}
      <span>{title}</span>
      {position === "right" && icon}
    </button>
  );
}

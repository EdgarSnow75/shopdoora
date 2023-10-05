import React, { MouseEventHandler } from "react";

export default function PrimaryBtn({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`btn rounded-[10rem] border-none px-14 bg-[#e8e8e4] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

import React, { MouseEventHandler } from "react";

export default function CarousalBtn({
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
      className={`btn bg-black border-none py-20 opacity-80 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

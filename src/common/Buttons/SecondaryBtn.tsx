import React, { MouseEventHandler } from "react";

export default function SecondaryBtn({
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
      className={`btn rounded-[8rem] border-none px-8 bg-black bg-opacity-60 text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

import { Montserrat } from "next/font/google";
import { MouseEventHandler } from "react";

interface ScrollSpyItemProps {
  label: string;
  actived: boolean;
  className?: string;
  onclick: MouseEventHandler;
}

const montserrat = Montserrat({
  style: ["italic", "normal"],
  subsets: ["latin"]
});

export default function ScrollSpyItem({
  label,
  actived,
  className,
  onclick,
}: ScrollSpyItemProps) {
  return (
    <span
      onClick={onclick}
      className={`${
        actived ? "bg-yellow" : "hover:bg-yellow/50"
      } ... rounded p-1 cursor-pointer text-lg-dynamic font-bold text-black ${
        montserrat.className
      }  ${className} `}
    >
      {label}
    </span>
  );
}

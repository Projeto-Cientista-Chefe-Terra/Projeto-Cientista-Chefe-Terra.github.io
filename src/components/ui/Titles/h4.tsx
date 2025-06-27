import { Squada_One } from "next/font/google";

interface H4Props {
  fonte?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}
const montserratFont = Squada_One({
  subsets: ["latin"],
  weight: "400",
}); // Semibold

export default function H4({ children, id,className }: H4Props) {
  return (
    <div className={`${className ? className : "w-fit my-4"} `}>
      <h3
        id={id}
        className={`${montserratFont.className} text-shadow w-fit  pt-1 pb-2`}
      >
        {children}
      </h3>
    </div>
  );
}

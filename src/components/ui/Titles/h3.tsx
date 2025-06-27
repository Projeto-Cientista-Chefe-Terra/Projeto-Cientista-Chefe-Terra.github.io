import { Squada_One } from "next/font/google";

interface H3Props {
  fonte?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}
const montserratFont = Squada_One({
  subsets: ["latin"],
  weight: "400",
}); // Semibold

export default function H3({ children, id,className }: H3Props) {
  return (
    <div className={`${className ? className : "w-fit my-4"} `}>
      <h3
        id={id}
        className={`${montserratFont.className} text-white text-4xl-dynamic text-shadow w-fit  pt-1 pb-2`}
      >
        {children}
      </h3>
    </div>
  );
}

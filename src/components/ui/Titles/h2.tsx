import { Montserrat } from "next/font/google";

interface H2Props {
  fonte?: string;
  children: React.ReactNode;
}
const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: "500",
}); // Semibold

export default function H2({ children }: H2Props) {
  return (
    <div className=" w-fit box-shadow my-4">
      <h2
        className={`${montserratFont.className} text-4xl-dynamic text-shadow bg-cor2b  w-fit px-2 pt-1 pb-2`}
      >
        {children}
      </h2>
    </div>
  );
}

import { Montserrat } from "next/font/google";

interface H1Props {
  fonte?: string;
  children: React.ReactNode;
}
const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: "600",
}); // Semibold

export default function H1({ children }: H1Props) {
  return (
    <div className=" w-fit box-shadow">
      <h1
        className={`${montserratFont.className} text-5xl-dynamic text-shadow bg-cor2b  w-fit px-2 pt-1 pb-2`}
      >
        {children}
      </h1>
    </div>
  );
}

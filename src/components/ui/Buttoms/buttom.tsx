import { Montserrat } from "next/font/google";
import Link from "next/link";

interface ButtomProps {
  path: string;
  texto: string;
  className?: string;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
});

export default function Buttom({ path, texto, className }: ButtomProps) {
  return (
    <Link
      href={path}
      className={`bg-lightBrown p-2 rounded-xl card-shadow mb-5 underline text-xl-dynamic text-white ${montserrat.className} ${className} transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25   `}
    >
      <span>{texto}</span>
    </Link>
  );
}

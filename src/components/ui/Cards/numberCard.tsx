import { Montserrat } from "next/font/google";
import Card from "./card";

const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

interface NumberCardProps {
  index: number;
  className?: string;
  color?: string;
  children?: React.ReactNode;
}

export default function NumberCard({ index, children, color, className }: NumberCardProps) {
  return (
    <div className="h-full">
      {/* Açoes e projetos */}
      <div
        aria-label={`Ação número ${index + 1}`}
        className={`w-20 box-shadow rounded bg-cor2b text-center text-white text-4xl-dynamic lg:-ml-5 -ml-1 -mt-5 absolute p-5  ${montserrat.className}`}
      >
        <span aria-hidden="true">{index + 1}</span>
      </div>

      <Card color={color} className={`p-5 py-14${className} h-full`}>
        <div className="lg:h-2"></div>
        {children}
      </Card>
    </div>
  );
}

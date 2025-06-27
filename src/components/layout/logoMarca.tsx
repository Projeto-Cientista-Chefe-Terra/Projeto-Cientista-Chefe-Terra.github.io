import { Squada_One } from "next/font/google";
import Image from "next/image";

const squadaOne = Squada_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Logomarca() {
  return (
    <div className="flex  lg:w-fit h-80 mb-12">
      <p className={`${squadaOne.className} text-6xl lg:text-7xl w-3/6`}>
        Cientista Chefe Terra
      </p>
      <Image
        className=" mt-16 ml-36  lg:mt-24 lg:ml-44 w-3/6 lg:w-fit absolute"
        src="/Icons/CC_Terra.png"
        width={"250"}
        height={250}
        alt="Cientista Chefe Logo"
        // role=""
      />
    </div>
  );
}

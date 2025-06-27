import { Squada_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


const squadaOne = Squada_One({
  subsets: ["latin"],
  weight: "400",
});

export default function FAQLink() {
  return (
    <div className="w-16 hover:w-72 h-16 bottom-20 fixed overflow-hidden z-40 transition-all duration-500 ease-in-out">
      <Link
        href={"/cientista_chefe_responde"}
        className="w-64 hover: p-1 h-full flex justify-end items-center border-2 absolute -translate-x-3/4  hover:-translate-x-[2rem] bg-lightBrown rounded-full transition-all duration-500 ease-in-out"
      >
        <p className={`${squadaOne.className} mr-3 text-xl`}>
          CC Terra Responde !
        </p>
        <Image
          alt=""
          src={"/Icons/CC_Terra.png"}
          style={{
            objectFit: "contain",
            overflow: "hidden",
          }}
          className="h-full w-fit "
          width={300}
          height={300}
        />
      </Link>
    </div>
  );
}

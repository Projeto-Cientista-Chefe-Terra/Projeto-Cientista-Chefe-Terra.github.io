import { Montez } from "next/font/google";

const montez = Montez({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

interface GalleryButtomProps {
  onclick: () => void;
  text: "<" | ">";
  ariaText: string;
  currentIndex: number;
  maxIndex: number;
}

export default function GalleryButtom({
  ariaText,
  currentIndex,
  onclick,
  text,
  maxIndex,
}: GalleryButtomProps) {
  let activeNumber = 0;
  if (text == ">") {
    activeNumber = maxIndex;
  }

  return (
    <>
      {currentIndex == activeNumber ? (
        <div className="w-[4.5rem] h-[4rem] hidden lg:block pl-2"></div>
      ) : (
        <button
          onClick={onclick}
          aria-label={ariaText}
          className={
            "bg-lightBrown hover:bg-cor1b rounded-[1rem] w-[4.5rem] h-[4rem]  pl-2 text-9xl hidden lg:flex place-self-center place-items-center  " +
            `${montez.className}`
          }
        >
          <p className="leading-none pt-2" aria-hidden={true}>
            {text}
          </p>
        </button>
      )}
    </>
  );
}

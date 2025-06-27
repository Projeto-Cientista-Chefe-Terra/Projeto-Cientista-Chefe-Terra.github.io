import H2 from "@/components/ui/Titles/h2";
import Logos from "../Logos/logos";

export default function SliderPartners() {
  return (
    <div className="bg-white flex flex-col justify-end items-center ">
      <div className="bg-cor3b/45  text-black flex flex-grow flex-col w-full justify-center items-center ">
        <span className="text-white w-full px-3 lg:px-12">
          <H2>Nosso Parceiros</H2>
        </span>
        <div className="flex group flex-col justify-start items-start  w-10/12">
          <Logos />
        </div>
      </div>
      <div className="bg-darkBrown w-full text-center"></div>
    </div>
  );
}

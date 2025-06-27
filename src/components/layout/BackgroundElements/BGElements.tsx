import Image from "next/image";

export default function BGElements() {
  return (
    <div className="-z-10 h-4/6  inset-0 fixed flex justify-between">
      <div className="flex flex-col h-full justify-between">
        <div className=" w-10 h-10">
          <div className="overflow-hidden ">
            <Image
              style={{ objectFit: "cover", overflow: "hidden" }}
              src={"/Assets/backgroundAssets/yellowLeaf.png"}
              alt={""}
              height={500}
              width={500}
              className="absolute -left-80 -top-24 -rotate-3 animate-slide-in translate-x-[-200px] translate-y-[-200px]"
            />
          </div>
        </div>
        <div className=" w-10 h-10 ">
          <div className="overflow-hidden ">
            <Image
              style={{ objectFit: "cover", overflow: "hidden" }}
              src={"/Assets/backgroundAssets/rect.png"}
              alt={""}
              height={500}
              width={500}
              className="absolute -left-36 animate-slide-in translate-x-[-200px] translate-y-[200px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="overflow-hidden ">
          <div className="">
            <Image
              style={{ objectFit: "cover", overflow: "hidden" }}
              src={"/Assets/backgroundAssets/sol.png"}
              alt={""}
              height={180}
              width={180}
              className="animate-slide-in-spin [--tw-translate-x:200px] [--tw-translate-y:-200px] absolute -right-14 -top-14 "
            />
          </div>
        </div>
        <div className=" w-96 h-96 relative ">
          <div className="overflow-hidden ">
            <Image
              style={{ objectFit: "cover", overflow: "hidden" }}
              src={"/Assets/backgroundAssets/cactor.png"}
              alt={""}
              height={600}
              width={600}
              className="absolute animate-slide-in translate-x-[200px] translate-y-[200px] left-10 top-[10rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

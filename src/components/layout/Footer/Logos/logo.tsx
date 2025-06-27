import Image from "next/image";

interface LogoProps {
  path: string;
  link: string;
  size: number;
  sigla: string;
  desc: string;
  institu: string | undefined;
}

export default function Logo({ path, link, sigla, institu, desc, size = 35 }: LogoProps) {
  return (
    <div className="flex w-[19rem] items-center">
      <a
        href={`${link}`}
        target="_blank"
        className="min-w-21 h-32 flex place-content-center w-full px-5"
      >
        <Image
          className=""
          style={{ objectFit: "contain" }}
          src={`${path}`}
          width={size}
          height={size}
          alt={institu ?? sigla}
        />
      </a>
      <div>
        <h5 className="font-bold text-lg-dynamic">
          {sigla == "" ? institu : sigla}
        </h5>
        <p className="text-xs-dynamic font-light">{desc}</p>
      </div>
    </div>
  );
}

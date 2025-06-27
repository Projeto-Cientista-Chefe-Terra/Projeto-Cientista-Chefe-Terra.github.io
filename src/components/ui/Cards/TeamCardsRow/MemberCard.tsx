import { Montserrat, Squada_One } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const squadaOne = Squada_One({
  subsets: ["latin"],
  weight: "400",
});

export interface MemberCardProps {
  roler?: string;
  name?: string;
  linkLattes?: string;
  resume?: string;
  imgLink?: string;
}

export const MemberCard = ({
  roler = "Função",
  name = "Nome",
  linkLattes,
  resume,
  imgLink,
}: MemberCardProps) => {
  return (
    <div className="w-80">
      <div
        className={` ${"bg-orange"} min-h-[27rem] max-h-[32rem] text-base-dynamic rounded-xl box-shadow-dark mb-5 text-black `}
      >
        <div
          className={`bg-white h-[17rem] w-full text-base-dynamic ${squadaOne.className} rounded-xl flex overflow-hidden mb-1 justify-end`}
        >
          <Image
            src={
              imgLink ??
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K1797030H6"
            }
            alt=""
            className="object-cover"
            width={400}
            height={400}
          />
          <div
            className={`bg-lightBrown px-6 absolute py-1 mr-2 mt-2 box-shadow-dark rounded h-fit text-base-dynamic w-fit`}
          >
            <span className="text-shadow-sm text-white">{roler}</span>
          </div>
        </div>
        {/* Dados */}

        <div className={`flex flex-col px-3 ${montserrat.className}`}>
          <strong>{name}</strong>
          <a
            href={linkLattes}
            target="_blanck"
            className="text-md-dynamic italic font-light "
          >
            Lattes
          </a>
          <strong>Resumo</strong>
          <p className="text-xs-dynamic">
            {resume
              ? resume
              : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            praesentium, fuga quasi molestiae, at officiis nemo earum magnam
            odio temporibus vel! Harum,`}
          </p>
        </div>
      </div>
    </div>
  );
};

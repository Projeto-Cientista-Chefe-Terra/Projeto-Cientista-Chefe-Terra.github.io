import NumberCard from "@/components/ui/Cards/numberCard";
import { Montserrat } from "next/font/google";
import { IoCode } from "react-icons/io5";
import { MdSearch, MdTravelExplore } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });


export default function NumeredCards() {
  return (
    // TODO Mudar para a direção esperada
    <div className="grid lg:grid-cols-2 grid-rows-2 gap-10 md:mx-24 lg:mt-10 mt-10 h-[fit-content]">
      <div className="">
        <NumberCard index={0} color={"bg-yellow"}>
          <div className="flex items-center flex-col">
            <div className="w-full h-full">
              <div className="text-center justify-center flex flex-col mx-4 mb-4 lg:mb-4 items-center">
                <MdSearch size={128} />
                <span className={`${montserrat.className} text-3xl`}>
                  Pesquisa
                </span>
              </div>
            </div>
            <p className="text-justify text-base-dynamic">
              Nossa pesquisa utiliza a metodologia &quot;Marco de Avaliação da
              Governança de Terras&quot; para avaliar a governança fundiária do
              Ceará. Investigamos a relação entre governança e proteção
              ambiental, além de estudar estratégias de reprodução social em
              assentamentos. Trabalhamos com abordagens qualitativas e
              quantitativas, incluindo grupos focais e painéis de especialistas,
              sempre com foco na participação social e construção coletiva de
              conhecimento.
            </p>
          </div>
        </NumberCard>
      </div>
      <div className="">
        <NumberCard index={1} color={"bg-cor5b"}>
          <div className="flex items-center flex-col">
            <div className="w-full h-full">
              <div className="text-center justify-center flex flex-col mx-4  mb-4 lg:mb-4 items-center">
                <RiPencilFill size={128} />
                <span className={`${montserrat.className} text-3xl`}>
                  Análise
                </span>
              </div>
            </div>
            <p className="text-justify mb-4 text-base-dynamic">
              Nossa análise combina métodos qualitativos e quantitativos para
              avaliar a governança fundiária no Ceará. Utilizamos a metodologia
              LGAF para examinar direitos existentes, ordenamento territorial,
              gestão ambiental e resolução de conflitos. Também realizamos
              estudos em assentamentos estaduais para compreender as novas
              dinâmicas territoriais e relações campo-cidade, identificando
              desafios como sucessão familiar e diversificação produtiva.
            </p>
          </div>
        </NumberCard>
      </div>
      <div className="">
        <NumberCard index={2} color={"bg-[#47a545]"}>
          <div className="w-full">
            <div className="text-center flex flex-col mb-4 items-center">
              <MdTravelExplore size={128} />
              <span className={`${montserrat.className} text-3xl`}>Campo</span>
            </div>
          </div>
          <p className="text-justify mb-4 text-base-dynamic">
            Nossa atuação em campo envolve coleta de dados em assentamentos e
            territórios tradicionais, usando metodologias participativas como
            entrevistas e grupos focais. Realizamos levantamentos
            georreferenciados e estudos de caso para compreender dinâmicas
            territoriais locais. Este trabalho é essencial para validar
            informações e construir soluções que respeitem as particularidades
            socioambientais de cada território.
          </p>
        </NumberCard>
      </div>
      {/* TODO */}

      <div className="">
        <NumberCard index={3} color={"bg-[#FF8934]"}>
          <div className="w-full">
            <div className="text-center flex flex-col mb-4 lg:mb-4 items-center">
              <IoCode size={128} />
              <span className={`${montserrat.className} text-3xl`}>
                Desenvolvimento
              </span>
            </div>
          </div>
          <p className="text-justify mb-8 text-base-dynamic">
            Desenvolvemos um software interativo para apoio à tomada de decisão
            na governança fundiária, integrando dados da malha fundiária do
            Ceará com base cartográfica. Esta ferramenta, projetada com o IDACE
            e STI, permite visualizar informações georreferenciadas sobre a
            estrutura fundiária, facilitando a elaboração de políticas públicas,
            pesquisas e a resolução de conflitos territoriais, especialmente em
            áreas ocupadas por populações tradicionais.
          </p>
        </NumberCard>
      </div>
    </div>
  );
}

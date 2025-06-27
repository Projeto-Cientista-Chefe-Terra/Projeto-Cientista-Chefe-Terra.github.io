import Link from "next/link";
import Image from "next/image";
import H1 from "./h1";


interface PageTitleProps {
  title: string
}

export default function PageTitle({title}: PageTitleProps) {
  return (
    <div className="flex items-center mb-4 flex-col space-y-4 lg:flex-row lg:space-x-4">
      <Link href={"/"}>
        <Image
          className=""
          src="/Icons/CC_Terra.png"
          width={200}
          height={200}
          alt="Voltar ao Início"
        />
      </Link>
      <H1> {title} </H1>
    </div>
  );
}

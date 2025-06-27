import Link from "next/link";

interface NavButtonProps {
  text: string;
  destine: string;
  extraClassName?: string;
  extraClassNameSpan?: string;
}

export default function NavButton({
  text,
  destine,
  extraClassName,
  extraClassNameSpan
}: NavButtonProps) {
  return <Link className={`${extraClassName} hover:text-darkBrown h-full flex items-center px-1`} href={destine}>
    <span className={extraClassNameSpan }>{text}</span> 
    {/* Passar cpmo parametro o clasname do span para o tamanho */}
  </Link>;
}

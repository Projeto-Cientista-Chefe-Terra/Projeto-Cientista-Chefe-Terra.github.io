import NavButton from "../../header/NavigatorBar/NavButton";

export default function NavigatorBar() {
  return (
    <nav className="p-2 flex flex-wrap justify-center gap-4 lg:justify-between items-center text-base-dynamic">
      <NavButton text="Início" destine="/" extraClassName="font-bold" />
      <NavButton text="Sobre" destine="/sobre" extraClassName="font-bold" />
      <NavButton text="Galeria" destine="/galeria" extraClassName="font-bold" />
      <NavButton
        text="Publicações"
        destine="/publicacoes"
        extraClassName="font-bold"
      />
      <NavButton text="Equipe" destine="/equipe" extraClassName="font-bold" />
      <NavButton
        text="Fale Conosco"
        destine="/contato"
        extraClassName="font-bold"
      />
      <NavButton
        text="CCT Responde"
        destine="/cientista_chefe_responde"
        extraClassName="font-bold"
      />
    </nav>
  );
}

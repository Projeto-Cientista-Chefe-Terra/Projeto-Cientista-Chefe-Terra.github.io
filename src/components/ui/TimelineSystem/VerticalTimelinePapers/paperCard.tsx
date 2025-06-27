import Card from "../../Cards/card";

export const PaperCard = ({
  autores,
  data,
  nomeArtigo,
  descricaoArtigo,
}: {
  autores: string;
  data: string;
  nomeArtigo: string;
  descricaoArtigo: string;
}) => {
  return (
    <Card className="transition duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-black     flex flex-col gap-y-2 shadow-md rounded-xl p-4">
      <div className="text-black font-bold text-lg-dynamic border-b border-darkBrown">
        <span aria-label={`Titulo: ${nomeArtigo}`}>{nomeArtigo}</span>
      </div>
      <div className="text-sm-dynamic">{descricaoArtigo}</div>
      <div className="text-black  flex justify-between text-sm-dynamic border-darkBrown">
        <p className="italic">
          <span aria-label={`Autores: ${autores}`}>{autores}</span>
        </p>
        <div className="flex justify-end">
          <span className="font-bold text-sm-dynamic" aria-label={`Data de Publicação: ${data}`}>{data}</span>
        </div>
      </div>
    </Card>
  );
};

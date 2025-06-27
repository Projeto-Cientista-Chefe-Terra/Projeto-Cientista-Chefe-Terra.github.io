export function sliceList<T>(lista: T[], tamanhoMaximo: number = 6): T[][] {
  const resultado: T[][] = [];
  for (let i = 0; i < lista.length; i += tamanhoMaximo) {
    resultado.push(lista.slice(i, i + tamanhoMaximo));
  }
  return resultado;
}

export function separeteTxtAndImages(lista: string[]): {
  txtFile: string | undefined;
  images: string[];
} {
  const txtFile = lista.filter((arquivo) => arquivo.endsWith(".txt"))[0];
  const images = lista.filter((arquivo) => !arquivo.endsWith(".txt"));

  return { txtFile, images };
}

import fs from "fs";

export function getPathInsidelist(path: string) {
  try {
    const imageFiles = fs.readdirSync(path);
    return imageFiles;
  } catch (error) {
    console.error("Erro ao ler a pasta de imagens:", error);
    return [];
  }
}

export function processarArquivoTxt(caminhoArquivo: string) {
  try {
    const conteudo = fs.readFileSync(caminhoArquivo, "utf-8");
    return conteudo;
  } catch (error) {
    throw new Error(
      `Erro ao processar arquivo: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

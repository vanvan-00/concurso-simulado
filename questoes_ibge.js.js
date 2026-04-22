// 50 questões para IBGE - Nível Fácil
// 50% Conhecimentos Gerais (25 questões)
const questoesIBGE = {
  "Cebraspe": {
    "CE": [
      // 12 questões de Conhecimentos Gerais (C/E)
      { id: "IBGE_CE_01", texto: "O IBGE é responsável pelo Censo Demográfico brasileiro.", materia: "Conhecimentos Gerais", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_02", texto: "A sede do IBGE fica na cidade de São Paulo.", materia: "Conhecimentos Gerais", correta: "Errado", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_03", texto: "O Censo é realizado a cada 10 anos.", materia: "Conhecimentos Gerais", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_04", texto: "O IBGE produz o PIB (Produto Interno Bruto) do Brasil.", materia: "Conhecimentos Gerais", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_05", texto: "A sigla IBGE significa Instituto Brasileiro de Gestão Econômica.", materia: "Conhecimentos Gerais", correta: "Errado", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_06", texto: "O Censo 2022 foi adiado por causa da pandemia.", materia: "Conhecimentos Gerais", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_07", texto: "IBGE é uma autarquia federal.", materia: "Conhecimentos Gerais", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_08", texto: "O Censo coleta dados apenas sobre população urbana.", materia: "Conhecimentos Gerais", correta: "Errado", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_09", texto: "O Sistema IBGE de Recuperação Automática (SIDRA) disponibiliza dados estatísticos.", materia: "Conhecimentos Gerais", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_10", texto: "O IBGE não faz pesquisas sobre agricultura.", materia: "Conhecimentos Gerais", correta: "Errado", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_11", texto: "A Pesquisa Nacional por Amostra de Domicílios (PNAD) é realizada pelo IBGE.", materia: "Conhecimentos Gerais", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_12", texto: "O censo IBGE conta também a população indígena.", materia: "Conhecimentos Gerais", correta: "Certo", alternativas: ["Certo","Errado"] },
      // Raciocínio Lógico (4)
      { id: "IBGE_CE_13", texto: "Se todo A é B e nenhum B é C, então nenhum A é C.", materia: "Raciocínio Lógico", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_14", texto: "A proposição 'Se chove então molha' é equivalente a 'Se não molha então não chove'.", materia: "Raciocínio Lógico", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_15", texto: "A negação de 'Todos os gatos são pretos' é 'Nenhum gato é preto'.", materia: "Raciocínio Lógico", correta: "Errado", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_16", texto: "Em uma sequência 2,5,8,11... o próximo termo é 14.", materia: "Raciocínio Lógico", correta: "Certo", alternativas: ["Certo","Errado"] },
      // Informática (4)
      { id: "IBGE_CE_17", texto: "O sistema operacional Windows é um software livre.", materia: "Informática", correta: "Errado", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_18", texto: "A nuvem (cloud computing) permite armazenar dados na internet.", materia: "Informática", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_19", texto: "O Excel é um programa de edição de textos.", materia: "Informática", correta: "Errado", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_20", texto: "O protocolo HTTPS indica uma conexão segura na web.", materia: "Informática", correta: "Certo", alternativas: ["Certo","Errado"] },
      // Atualidades (3)
      { id: "IBGE_CE_21", texto: "O Brasil é o país mais populoso da América do Sul.", materia: "Atualidades", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_22", texto: "A Amazônia Legal abrange apenas a região Norte do Brasil.", materia: "Atualidades", correta: "Errado", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_23", texto: "O Mercosul é um bloco econômico formado apenas por Brasil e Argentina.", materia: "Atualidades", correta: "Errado", alternativas: ["Certo","Errado"] },
      // Matemática (2)
      { id: "IBGE_CE_24", texto: "A raiz quadrada de 144 é 12.", materia: "Matemática", correta: "Certo", alternativas: ["Certo","Errado"] },
      { id: "IBGE_CE_25", texto: "20% de 300 é igual a 60.", materia: "Matemática", correta: "Certo", alternativas: ["Certo","Errado"] }
    ],
    "Multipla": [
      // Conhecimentos Gerais (13 questões múltipla escolha)
      { id: "IBGE_MC_01", texto: "O IBGE foi fundado em que ano?", materia: "Conhecimentos Gerais", correta: "B) 1936", alternativas: ["A) 1920","B) 1936","C) 1945","D) 1950"] },
      { id: "IBGE_MC_02", texto: "Qual a principal função do IBGE?", materia: "Conhecimentos Gerais", correta: "C) Realizar pesquisas estatísticas e geográficas", alternativas: ["A) Fiscalizar o comércio","B) Emitir moeda","C) Realizar pesquisas estatísticas e geográficas","D) Administrar portos"] },
      { id: "IBGE_MC_03", texto: "O Censo Demográfico é realizado a cada:", materia: "Conhecimentos Gerais", correta: "C) 10 anos", alternativas: ["A) 5 anos","B) 8 anos","C) 10 anos","D) 12 anos"] },
      { id: "IBGE_MC_04", texto: "Qual destes NÃO é um produto do IBGE?", materia: "Conhecimentos Gerais", correta: "D) Selic", alternativas: ["A) PIB","B) PNAD","C) Censo Agropecuário","D) Selic"] },
      { id: "IBGE_MC_05", texto: "A sigla PNAD significa:", materia: "Conhecimentos Gerais", correta: "A) Pesquisa Nacional por Amostra de Domicílios", alternativas: ["A) Pesquisa Nacional por Amostra de Domicílios","B) Programa Nacional de Apoio ao Desenvolvimento","C) Plano Nacional de Atendimento Digital","D) Pesquisa de Nível Avançado de Dados"] },
      { id: "IBGE_MC_06", texto: "O atual presidente do IBGE (2025) é:", materia: "Conhecimentos Gerais", correta: "B) Marcio Pochmann", alternativas: ["A) Roberto Olinto","B) Marcio Pochmann","C) Paulo Guedes","D) Ciro Gomes"] },
      { id: "IBGE_MC_07", texto: "O que é o SIDRA?", materia: "Conhecimentos Gerais", correta: "A) Sistema IBGE de Recuperação Automática", alternativas: ["A) Sistema IBGE de Recuperação Automática","B) Sistema de Informações Demográficas Rurais","C) Sistema Digital de Registro Agropecuário","D) Sistema Integrado de Dados Regionais"] },
      { id: "IBGE_MC_08", texto: "O Censo 2022 registrou quantos habitantes no Brasil?", materia: "Conhecimentos Gerais", correta: "C) 203 milhões", alternativas: ["A) 190 milhões","B) 195 milhões","C) 203 milhões","D) 210 milhões"] },
      { id: "IBGE_MC_09", texto: "Qual estado tem a maior população segundo o IBGE?", materia: "Conhecimentos Gerais", correta: "A) São Paulo", alternativas: ["A) São Paulo","B) Minas Gerais","C) Rio de Janeiro","D) Bahia"] },
      { id: "IBGE_MC_10", texto: "O IBGE está vinculado a qual ministério?", materia: "Conhecimentos Gerais", correta: "B) Ministério do Planejamento e Orçamento", alternativas: ["A) Ministério da Economia","B) Ministério do Planejamento e Orçamento","C) Ministério da Ciência e Tecnologia","D) Casa Civil"] },
      { id: "IBGE_MC_11", texto: "A Pesquisa Industrial Anual (PIA) é feita pelo:", materia: "Conhecimentos Gerais", correta: "C) IBGE", alternativas: ["A) CNI","B) BNDES","C) IBGE","D) IPEA"] },
      { id: "IBGE_MC_12", texto: "Qual destes indicadores é calculado pelo IBGE?", materia: "Conhecimentos Gerais", correta: "A) IPCA", alternativas: ["A) IPCA","B) Selic","C) CDI","D) Ibovespa"] },
      { id: "IBGE_MC_13", texto: "O que significa a sigla CAGED?", materia: "Conhecimentos Gerais", correta: "B) Cadastro Geral de Empregados e Desempregados", alternativas: ["A) Cadastro de Gestão Demográfica","B) Cadastro Geral de Empregados e Desempregados","C) Centro de Apoio Geográfico","D) Comitê de Avaliação de Dados"] },
      // Raciocínio Lógico (4)
      { id: "IBGE_MC_14", texto: "Se Ana é mais alta que Bia e Bia é mais alta que Carla, então:", materia: "Raciocínio Lógico", correta: "A) Ana é mais alta que Carla", alternativas: ["A) Ana é mais alta que Carla","B) Carla é mais alta que Ana","C) Bia é a mais baixa","D) Ana e Carla têm a mesma altura"] },
      { id: "IBGE_MC_15", texto: "Qual a negação de 'Todos os brasileiros gostam de futebol'?", materia: "Raciocínio Lógico", correta: "D) Existe brasileiro que não gosta de futebol", alternativas: ["A) Nenhum brasileiro gosta de futebol","B) Alguns brasileiros gostam de futebol","C) Todos os brasileiros não gostam de futebol","D) Existe brasileiro que não gosta de futebol"] },
      { id: "IBGE_MC_16", texto: "Complete a sequência: 3, 6, 12, 24, __", materia: "Raciocínio Lógico", correta: "C) 48", alternativas: ["A) 30","B) 36","C) 48","D) 60"] },
      { id: "IBGE_MC_17", texto: "Se 2x + 5 = 17, então x vale:", materia: "Raciocínio Lógico", correta: "B) 6", alternativas: ["A) 5","B) 6","C) 7","D) 8"] },
      // Informática (3)
      { id: "IBGE_MC_18", texto: "Qual destes é um navegador de internet?", materia: "Informática", correta: "C) Google Chrome", alternativas: ["A) Windows","B) Excel","C) Google Chrome","D) Photoshop"] },
      { id: "IBGE_MC_19", texto: "O que significa a sigla CPU?", materia: "Informática", correta: "A) Central Processing Unit", alternativas: ["A) Central Processing Unit","B) Computer Personal Unit","C) Central Program Utility","D) Core Processing Unit"] },
      { id: "IBGE_MC_20", texto: "Qual extensão indica um arquivo de imagem?", materia: "Informática", correta: "B) .jpg", alternativas: ["A) .txt","B) .jpg","C) .exe","D) .mp3"] },
      // Atualidades (2)
      { id: "IBGE_MC_21", texto: "Qual país é o maior parceiro comercial do Brasil?", materia: "Atualidades", correta: "A) China", alternativas: ["A) China","B) Estados Unidos","C) Argentina","D) Alemanha"] },
      { id: "IBGE_MC_22", texto: "O desastre ambiental de Brumadinho (MG) envolveu o rompimento de uma barragem de:", materia: "Atualidades", correta: "C) Minério de ferro", alternativas: ["A) Petróleo","B) Carvão","C) Minério de ferro","D) Rejeitos nucleares"] },
      // Matemática (3)
      { id: "IBGE_MC_23", texto: "Quanto é 15% de 200?", materia: "Matemática", correta: "B) 30", alternativas: ["A) 20","B) 30","C) 25","D) 35"] },
      { id: "IBGE_MC_24", texto: "A média aritmética de 8, 10, 12 é:", materia: "Matemática", correta: "C) 10", alternativas: ["A) 8","B) 9","C) 10","D) 11"] },
      { id: "IBGE_MC_25", texto: "Qual a área de um quadrado de lado 5 cm?", materia: "Matemática", correta: "B) 25 cm²", alternativas: ["A) 20 cm²","B) 25 cm²","C) 30 cm²","D) 10 cm²"] }
    ]
  }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questoesIBGE;
} else {
  window.questoesIBGE = questoesIBGE;
}
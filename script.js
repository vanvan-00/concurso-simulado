/* ═══════════════════════════════════════════════════════════
   APROVABRASIL — script.js
   100 questões divididas em 5 concursos × 20 questões
   Metodologia: Feedback Técnico + Feynman + Macete
═══════════════════════════════════════════════════════════ */

const FREE_LIMIT = 20;   // questões gratuitas por concurso
const WA_URL = "https://wa.me/5582996793347?text=Quero%20liberar%20o%20simulado%20completo";

// ─────────────────────────────────────────────────────────
// CONCURSOS META
// ─────────────────────────────────────────────────────────
const CONCURSOS = [
  { id: 'caixa',  name: 'CAIXA',  org: 'Caixa Econômica Federal', icon: '🏦', banca: 'CESGRANRIO' },
  { id: 'bb',     name: 'BB',     org: 'Banco do Brasil',          icon: '💛', banca: 'CESGRANRIO' },
  { id: 'sefaz',  name: 'SEFAZ',  org: 'Secretaria da Fazenda',    icon: '📊', banca: 'FCC / Cebraspe' },
  { id: 'inss',   name: 'INSS',   org: 'Prev. Social',             icon: '🏥', banca: 'Cebraspe' },
  { id: 'ibge',   name: 'IBGE',   org: 'Instituto Brasileiro',     icon: '📈', banca: 'Cebraspe' },
];

// ─────────────────────────────────────────────────────────
// BANCO DE QUESTÕES — 20 por concurso
// Campos: id, concurso, subject, text, answer(bool),
//         tecnico, feynman, macete
// ─────────────────────────────────────────────────────────
const ALL_QUESTIONS = [

  // ══════════════════════════════════
  // CAIXA — 20 questões
  // ══════════════════════════════════
  { id:1, concurso:'caixa', subject:'Conhecimentos Bancários', text:'A Caixa Econômica Federal é uma empresa pública federal, pessoa jurídica de direito privado, vinculada ao Ministério da Fazenda.', answer:false,
    tecnico:'A CAIXA é empresa pública federal vinculada ao <strong>Ministério da Fazenda</strong>, mas atua também como agente das políticas públicas do governo federal, como habitação (FGTS/Minha Casa) e loterias. Está sujeita ao regime jurídico de direito privado, mas com derrogações de direito público (art. 173 CF/88).',
    feynman:'Imagina que a CAIXA é como uma loja que pertence ao governo — ela vende serviços financeiros, mas o dono dela é a União. Não é a mesma coisa que um banco privado, nem igual a uma repartição pública normal.',
    macete:'<em>CAIXA = Empresa Pública + Ministério da Fazenda.</em> "A CAIXA é da União e guarda o dinheiro da nação." A questão errou ao dizer "Ministério da Fazenda" como vínculo exclusivo — é correto — mas o erro era outro: CAIXA não é banco comercial comum, é agente social.' },
  { id:2, concurso:'caixa', subject:'Conhecimentos Bancários', text:'O FGTS (Fundo de Garantia do Tempo de Serviço) é gerido pela Caixa Econômica Federal, que funciona como agente operador e gestor do fundo.', answer:true,
    tecnico:'A Lei 8.036/1990 atribui à <strong>Caixa Econômica Federal</strong> a condição de <em>agente operador</em> do FGTS, centralizando as contas vinculadas dos trabalhadores e operando os recursos segundo diretrizes do Conselho Curador.',
    feynman:'O FGTS é uma "poupança forçada" que o empregador deposita mensalmente para você. A CAIXA é o "cofre gigante" que guarda esse dinheiro de todos os trabalhadores do Brasil.',
    macete:'<em>FGTS → CAIXA cuida.</em> Lembre: "CAIXA = CAIXINHA do trabalhador." Quem opera? CAIXA. Quem dirige as regras? Conselho Curador.' },
  { id:3, concurso:'caixa', subject:'Matemática Financeira', text:'Em um empréstimo pelo sistema Price, as parcelas são crescentes ao longo do tempo, pois os juros embutidos aumentam progressivamente.', answer:false,
    tecnico:'No <strong>Sistema Price (Francês)</strong>, as parcelas são <em>constantes</em> (fixas). O que varia é a composição: no início, a parcela contém mais juros e menos amortização; ao final, menos juros e mais amortização. As parcelas nunca são crescentes nesse sistema.',
    feynman:'Imagine dividir uma pizza em fatias iguais. No sistema Price, cada fatia (parcela) tem o mesmo tamanho. Mas dentro de cada fatia, a porção de "juros" vai diminuindo e a porção de "pagamento real" vai aumentando.',
    macete:'<em>PRICE = Parcelas Iguais (PI).</em> "O Preço é fixo, o que muda é a receita." Parcelas constantes, amortização crescente, juros decrescentes.' },
  { id:4, concurso:'caixa', subject:'Conhecimentos Bancários', text:'O Banco Central do Brasil (BACEN) é o responsável por emitir papel-moeda e realizar operações de redesconto aos bancos comerciais.', answer:true,
    tecnico:'O <strong>BACEN</strong>, como autoridade monetária, tem competência exclusiva para emitir cédulas e moedas (art. 164, CF/88) e realiza operações de <em>redesconto</em> (empréstimos de última instância aos bancos) e de mercado aberto para controlar a liquidez da economia.',
    feynman:'O BACEN é como o "banco dos bancos". Se um banco comum ficar sem dinheiro, pode pedir emprestado ao BACEN. E só o BACEN pode imprimir dinheiro de verdade no Brasil.',
    macete:'<em>BACEN = "BANCo Central Emite Notas."</em> Funções: emissor, emprestador de última instância, supervisor do sistema financeiro.' },
  { id:5, concurso:'caixa', subject:'Português', text:'Na frase "Os clientes que efetuaram o cadastro receberão os benefícios", a oração "que efetuaram o cadastro" é uma oração subordinada adverbial.', answer:false,
    tecnico:'A oração "que efetuaram o cadastro" é uma <strong>oração subordinada adjetiva restritiva</strong>, pois modifica o substantivo "clientes", restringindo quais clientes receberão os benefícios. Orações adjetivas são introduzidas por pronome relativo (que, o qual, cujo) e equivalem a um adjetivo.',
    feynman:'A oração está "descrevendo" quem são os clientes, como um adjetivo faz. "Clientes cadastrados" — esse "cadastrados" é um adjetivo. Quando a oração faz isso, ela também é adjetiva.',
    macete:'<em>ADJETIVA = modifica SUBSTANTIVO.</em> "Clientes QUE fizeram cadastro" → quem são esses clientes? Isso é adjetiva restritiva. Adverbial indica circunstância (tempo, causa, concessão...).' },
  { id:6, concurso:'caixa', subject:'Raciocínio Lógico', text:'Se todo cliente VIP tem limite especial, e João tem limite especial, então João é cliente VIP.', answer:false,
    tecnico:'Esse é o <strong>falácia da afirmação do consequente</strong>. O silogismo correto: "Todo A é B; João é B; logo João é A" é <em>inválido</em>. Ter limite especial é condição necessária para VIP, mas não suficiente — outros clientes podem ter limite especial sem ser VIP.',
    feynman:'Todo cachorro (VIP) tem 4 patas (limite especial). Meu gato (João) tem 4 patas. Logo meu gato é cachorro? NÃO! Ter 4 patas não significa ser cachorro.',
    macete:'<em>P→Q e Q não implica P.</em> "Afirmar o consequente é falácia." Se "VIP → Limite", ter "Limite" NÃO garante ser "VIP".' },
  { id:7, concurso:'caixa', subject:'Atualidades', text:'O Sistema de Pagamentos Instantâneos brasileiro, o PIX, foi criado e é administrado pelo Banco Central do Brasil.', answer:true,
    tecnico:'O <strong>PIX</strong> foi instituído pelo <em>Banco Central do Brasil</em> pela Resolução BCB nº 1 de 2020. O BACEN é o regulador e gestor da infraestrutura central (SPI — Sistema de Pagamentos Instantâneos), garantindo o funcionamento 24/7/365.',
    feynman:'O PIX é como uma estrada construída pelo governo (BACEN). Os bancos são os carros que usam essa estrada para levar o dinheiro de um lugar para outro, mas quem construiu e mantém a estrada é o Banco Central.',
    macete:'<em>PIX = Produto do BACEN.</em> "PIX foi o Banco Central quem FEZ." Lançado em 2020, funciona 24h, instantâneo.' },
  { id:8, concurso:'caixa', subject:'Conhecimentos Bancários', text:'O Conselho Monetário Nacional (CMN) é o órgão executivo máximo do Sistema Financeiro Nacional, sendo responsável pela execução das políticas monetária e cambial.', answer:false,
    tecnico:'O <strong>CMN</strong> é o órgão <em>normativo</em> (não executivo) máximo do SFN — formula políticas, não as executa. A execução da política monetária e cambial cabe ao <strong>BACEN</strong>. O CMN é composto pelo Ministro da Fazenda, o Ministro do Planejamento e o Presidente do BACEN.',
    feynman:'O CMN é como o "conselho de diretores" de uma empresa: decide as regras. O BACEN é o "gerente executivo": coloca as regras em prática no dia a dia.',
    macete:'<em>CMN = Normativo. BACEN = Executivo.</em> "O CMN manda, o BACEN executa." CMN não tem agências, não emite moeda — só normatiza.' },
  { id:9, concurso:'caixa', subject:'Matemática Financeira', text:'Em uma aplicação com juros simples de 2% ao mês, após 6 meses um capital de R$ 1.000,00 renderá R$ 120,00 de juros.', answer:true,
    tecnico:'Juros simples: J = C × i × t = 1000 × 0,02 × 6 = <strong>R$ 120,00</strong>. No regime simples, os juros incidem apenas sobre o capital inicial em cada período, sem capitalização.',
    feynman:'Imagine ganhar R$ 20 a cada mês por emprestar R$ 1.000. Após 6 meses: 6 × R$ 20 = R$ 120. Simples assim — sem juros sobre juros.',
    macete:'<em>J = C × i × t.</em> "Capital vezes taxa vezes tempo." 1000 × 2% × 6 = 120. Memorize a fórmula: CIT (Como Is Trivial).' },
  { id:10, concurso:'caixa', subject:'Conhecimentos Bancários', text:'A caderneta de poupança é a única aplicação financeira garantida pelo Fundo Garantidor de Créditos (FGC).', answer:false,
    tecnico:'O <strong>FGC</strong> garante diversas aplicações, incluindo: depósitos à vista, depósitos a prazo (CDB/RDB), letras de câmbio, LCI, LCA, poupança, entre outros. O limite é de R$ 250.000 por CPF por instituição (e R$ 1 milhão no total a cada 4 anos). Não é exclusivo da poupança.',
    feynman:'O FGC é como um "seguro" para seu dinheiro no banco. Ele protege vários tipos de aplicação, não só a poupança. Se o banco quebrar, você recebe de volta até R$ 250 mil.',
    macete:'<em>FGC = Seguro até R$ 250k por CPF/banco.</em> Cobre: poupança, CDB, LCI, LCA, conta corrente. NÃO cobre: fundos de investimento e ações.' },
  { id:11, concurso:'caixa', subject:'Português', text:'O uso da vírgula está correto em: "A agência, que fica no centro, atende das 8h às 17h."', answer:true,
    tecnico:'A oração "que fica no centro" é uma <strong>oração subordinada adjetiva explicativa</strong>, que deve ser separada por vírgulas pois apenas acrescenta informação sobre "a agência" — não restringe o sentido. Se fosse restritiva (identificando qual agência), não haveria vírgulas.',
    feynman:'As vírgulas aqui são como parênteses: a informação dentro delas é um "bônus", não muda quem é a agência. Se você tirar o trecho entre vírgulas, a frase continua com sentido completo.',
    macete:'<em>EXPLICATIVA = vírgulas (informação extra). RESTRITIVA = sem vírgulas (identifica qual).</em> "A agência (QUE FICA NO CENTRO) atende..." → explicativa → vírgulas obrigatórias.' },
  { id:12, concurso:'caixa', subject:'Raciocínio Lógico', text:'A expressão lógica (P ∨ Q) → R é equivalente a (¬P ∧ ¬Q) ∨ R.', answer:true,
    tecnico:'Usando equivalências lógicas: (P∨Q)→R ≡ ¬(P∨Q)∨R ≡ (<strong>¬P ∧ ¬Q</strong>)∨R (pela Lei de De Morgan: ¬(P∨Q) = ¬P∧¬Q). Confirmado por tabela-verdade.',
    feynman:'Uma implicação "Se A então B" é a mesma coisa que "ou A é falso, ou B é verdadeiro". Quando A é "P ou Q", a negação de A é "nem P nem Q" (De Morgan).',
    macete:'<em>P→Q ≡ ¬P∨Q. De Morgan: ¬(A∨B)=¬A∧¬B.</em> "Implica = Nega o antecedente ou afirma o consequente."' },
  { id:13, concurso:'caixa', subject:'Conhecimentos Bancários', text:'O spread bancário representa a diferença entre a taxa de juros cobrada pelos bancos nos empréstimos e a taxa paga nas captações (depósitos).', answer:true,
    tecnico:'O <strong>spread bancário</strong> é o diferencial entre a taxa de captação (o que o banco paga ao depositante) e a taxa de aplicação (o que o banco cobra do tomador do crédito). Ele compõe o lucro do banco e inclui custos operacionais, inadimplência esperada e tributação.',
    feynman:'Imagine que o banco pega emprestado de você a 5% ao ano (poupança) e empresta para outro cliente a 30% ao ano. O "lucro bruto" do banco — os 25% de diferença — é o spread.',
    macete:'<em>SPREAD = Taxa de Empréstimo − Taxa de Captação.</em> "O banco compra barato (capta) e vende caro (empresta)." Spread alto = crédito caro para o consumidor.' },
  { id:14, concurso:'caixa', subject:'Atualidades', text:'O Programa Minha Casa, Minha Vida é operacionalizado exclusivamente pela Caixa Econômica Federal.', answer:false,
    tecnico:'O <strong>Minha Casa, Minha Vida</strong> (relançado em 2023 pela Lei 14.620/2023) é operacionalizado principalmente pela CAIXA, mas também pelo <strong>Banco do Brasil</strong> para a faixa rural (MCMV Rural). A afirmação "exclusivamente" torna a questão errada.',
    feynman:'A CAIXA é a principal "construtora financeira" do Minha Casa, mas ela não trabalha sozinha. O BB também participa, especialmente para quem mora no campo.',
    macete:'<em>MCMV: CAIXA (urbano) + BB (rural).</em> Quando a questão diz "exclusivamente", desconfie — na maioria dos casos em concurso, isso é um erro.' },
  { id:15, concurso:'caixa', subject:'Português', text:'A palavra "beneficência" está grafada corretamente, e sua acentuação obedece à regra das proparoxítonas.', answer:false,
    tecnico:'"Beneficência" é uma <strong>paroxítona</strong> terminada em ditongo crescente (-ia), que não é acentuada graficamente pela nova ortografia. A tonicidade recai na sílaba "-cên-" (be-ne-fi-<em>cên</em>-cia), tornando-a paroxítona — não proparoxítona. A grafia está correta, mas a classificação como proparoxítona está errada.',
    feynman:'Proparoxítona é quando o acento cai na antepenúltima sílaba, como em "lâmpada" (LÂM-pa-da). Em "beneficência", o acento cai na penúltima sílaba — é paroxítona.',
    macete:'<em>PRO-paroxítona = ANTEpenúltima.</em> "Proparoxítonas SEMPRE são acentuadas." be-ne-fi-CÊN-cia → acento na penúltima = paroxítona.' },
  { id:16, concurso:'caixa', subject:'Conhecimentos Bancários', text:'O Certificado de Depósito Interbancário (CDI) é uma taxa de referência utilizada como benchmark para a maioria dos investimentos de renda fixa no Brasil.', answer:true,
    tecnico:'O <strong>CDI</strong> é a taxa média dos empréstimos feitos entre bancos (overnight). É calculada pela B3 e serve de referência para a maior parte dos investimentos de renda fixa (CDBs, fundos DI, LCIs, etc.). Costuma ficar muito próxima da taxa Selic Over.',
    feynman:'Os bancos emprestam dinheiro uns aos outros todo dia. A taxa que usam nesses empréstimos é o CDI. Como é uma taxa de referência confiável, os investimentos passaram a usar ela como "régua" para comparar rendimentos.',
    macete:'<em>CDI ≈ Selic = termômetro da renda fixa.</em> "Investi 100% do CDI" significa que o investimento rendeu o mesmo que os bancos pagam entre si — muito bom para renda fixa!' },
  { id:17, concurso:'caixa', subject:'Matemática Financeira', text:'No Sistema de Amortização Constante (SAC), a parcela total paga em cada período diminui com o tempo, porque a amortização é fixa e os juros decrescem.', answer:true,
    tecnico:'No <strong>SAC</strong>, a amortização é constante (fixa) em todos os períodos. Como os juros incidem sobre o saldo devedor (que diminui a cada amortização), o valor dos juros decresce. Assim, parcela = amortização (fixa) + juros (decrescentes) → parcela <em>decrescente</em>.',
    feynman:'Imagine dever R$1.200 e pagar R$100 por mês de "dívida principal". No mês 1 você ainda paga muito juro; no mês 12, quase nenhum. A parcela vai diminuindo porque você deve menos.',
    macete:'<em>SAC = Amortização Constante → Parcelas Decrescentes.</em> "SAC DESCE." Price = Parcelas Iguais. SAC = Parcelas que caem.' },
  { id:18, concurso:'caixa', subject:'Raciocínio Lógico', text:'Um capital de R$ 500 é aplicado a juros compostos de 10% ao mês. Após 2 meses, o montante será de R$ 605,00.', answer:true,
    tecnico:'Juros compostos: M = C × (1+i)^t = 500 × (1,10)² = 500 × 1,21 = <strong>R$ 605,00</strong>. A diferença em relação aos juros simples (R$ 600) reflete a capitalização dos juros no 2.º período.',
    feynman:'No 1.º mês: 500 vira 550. No 2.º mês, os juros incidem sobre os 550 (não sobre os 500 originais): 550 × 10% = 55. Logo: 550 + 55 = 605. Isso é o "juro sobre juro".',
    macete:'<em>M = C(1+i)^t.</em> "Juros compostos: multiplica pelo fator para cada período." 500 × 1,1 × 1,1 = 605.' },
  { id:19, concurso:'caixa', subject:'Conhecimentos Bancários', text:'Lavagem de dinheiro consiste em transformar recursos obtidos ilicitamente em ativos com aparência de origem lícita, e ocorre em três etapas: colocação, ocultação e integração.', answer:true,
    tecnico:'A <strong>Lei 9.613/1998</strong> e o GAFI definem lavagem de dinheiro como o processo de legitimar recursos ilícitos em três fases: <em>colocação</em> (introdução no sistema financeiro), <em>ocultação</em> (disfarçar a origem) e <em>integração</em> (reinserção na economia como lícito).',
    feynman:'Imagine que você roubou dinheiro. Para "limpar" ele: (1) coloca num banco (colocação); (2) transfere várias vezes para confundir (ocultação); (3) compra um imóvel "legalizado" (integração). Pronto — o dinheiro sujo parece limpo.',
    macete:'<em>COI = Colocação → Ocultação → Integração.</em> "O COI das Olimpíadas lava dinheiro em 3 etapas." Memorize a sigla COI.' },
  { id:20, concurso:'caixa', subject:'Atualidades', text:'A taxa Selic é definida pelo Comitê de Política Monetária (COPOM) do Banco Central e é a principal taxa de juros da economia brasileira.', answer:true,
    tecnico:'O <strong>COPOM</strong> (Comitê de Política Monetária) reúne-se a cada 45 dias para definir a meta da Taxa Selic. A Selic é a taxa básica de juros da economia e serve de referência para todas as demais taxas do mercado, sendo o principal instrumento de controle da inflação pelo BACEN.',
    feynman:'A Selic é como o "preço do dinheiro" no Brasil. Quando o governo quer frear a inflação, sobe a Selic (dinheiro fica caro → menos consumo). Quem decide o valor? O COPOM.',
    macete:'<em>COPOM define SELIC a cada 45 dias.</em> "COPOM = Comitê que faz a Política Monetária." Selic alta = crédito caro = menos inflação.' },

  // ══════════════════════════════════
  // BANCO DO BRASIL — 20 questões
  // ══════════════════════════════════
  { id:21, concurso:'bb', subject:'Conhecimentos Bancários', text:'O Banco do Brasil é um banco múltiplo de capital misto, cujo acionista controlador é a União Federal.', answer:true,
    tecnico:'O <strong>Banco do Brasil S.A.</strong> é uma sociedade de economia mista (capital misto: governo + acionistas privados), organizado como banco múltiplo (pode operar diversas carteiras: comercial, investimento, crédito imobiliário etc.). A União Federal detém o controle acionário.',
    feynman:'O BB é como uma grande empresa onde o governo federal é o maior sócio, mas outras pessoas também têm ações. Por isso se chama "economia mista" — mistura dinheiro público e privado.',
    macete:'<em>BB = Sociedade de Economia Mista + Banco Múltiplo + União controla.</em> Diferente da CAIXA (empresa pública = só governo).' },
  { id:22, concurso:'bb', subject:'Conhecimentos Bancários', text:'O BB Seguridade é uma empresa separada do Banco do Brasil, responsável pela gestão dos negócios de seguridade do conglomerado.', answer:true,
    tecnico:'A <strong>BB Seguridade Participações S.A.</strong> é uma companhia aberta, subsidiária do Banco do Brasil, que reúne os negócios de seguros, previdência complementar aberta e capitalização do conglomerado BB. Tem capital aberto na B3.',
    feynman:'É como se o BB criasse uma "filha" só para cuidar dos seguros e previdência. Essa filha (BB Seguridade) tem vida própria — inclusive ações na bolsa.',
    macete:'<em>BB Seguridade = Subsidiária do BB para Seguros + Previdência.</em> "BB criou a Seguridade para cuidar do que não é só banco."' },
  { id:23, concurso:'bb', subject:'Atualidades Mercado', text:'A B3 (Brasil, Bolsa, Balcão) é a bolsa de valores oficial do Brasil, resultado da fusão entre BM&FBovespa e Cetip ocorrida em 2017.', answer:true,
    tecnico:'A <strong>B3</strong> foi criada em março de 2017 pela fusão entre a <em>BM&FBovespa</em> (mercado de ações e derivativos) e a <em>Cetip</em> (registro de títulos de renda fixa). É a principal bolsa de valores, mercadorias e futuros do Brasil e uma das maiores do mundo.',
    feynman:'Antes havia duas empresas: uma que cuidava de ações (BM&F) e outra que cuidava dos títulos de renda fixa (Cetip). Em 2017, elas se juntaram e virou a B3 — uma só empresa para tudo.',
    macete:'<em>B3 = BM&FBovespa + Cetip (2017).</em> "B3 = Brasil em 3 letras, criada pela fusão de 2 gigantes." Sede em São Paulo.' },
  { id:24, concurso:'bb', subject:'Português', text:'A frase "O banco investiu pesado em tecnologia" apresenta uso inadequado da língua padrão, pois "pesado" é adjetivo e não advérbio.', answer:true,
    tecnico:'Na norma culta escrita, "pesado" funciona como adjetivo (modifica substantivos), enquanto o advérbio adequado seria <strong>"pesadamente"</strong>. Contudo, o uso de adjetivos como advérbios é aceito na linguagem informal e coloquial — em provas de concurso, a construção pode ser apontada como inadequada à língua padrão escrita.',
    feynman:'Em português formal, verbos são modificados por advérbios (que geralmente terminam em -mente). Dizer "investiu pesado" é comum na fala, mas em textos formais o correto seria "investiu pesadamente".',
    macete:'<em>Verbo + ADVÉRBIO (pesadamente). Verbo + adjetivo = coloquial.</em> "Falou bonito" (coloquial) vs. "Falou bonitamente" (formal).' },
  { id:25, concurso:'bb', subject:'Raciocínio Lógico', text:'Em um grupo de 40 funcionários, 25 falam inglês e 18 falam espanhol. Se todos falam pelo menos um dos dois idiomas, então 3 falam ambos.', answer:true,
    tecnico:'Usando o Princípio da Inclusão-Exclusão: |I∪E| = |I|+|E|−|I∩E| → 40 = 25+18−|I∩E| → |I∩E| = <strong>3</strong>. Questão correta.',
    feynman:'Imagina 25 pessoas em um círculo de inglês e 18 em um de espanhol. Se ao todo são 40, e 25+18=43, há 3 pessoas "contadas duas vezes" — essas 3 estão nos dois círculos.',
    macete:'<em>A∪B = A+B−(A∩B) → A∩B = A+B−Total.</em> "Inclusão-Exclusão: soma os grupos, desconta os repetidos." 25+18−40=3.' },
  { id:26, concurso:'bb', subject:'Conhecimentos Bancários', text:'A Letra de Crédito Imobiliário (LCI) é isenta de Imposto de Renda para pessoa física, o que a torna uma opção atrativa de investimento.', answer:true,
    tecnico:'A <strong>LCI</strong> (regulada pela Lei 10.931/2004) é isenta de IR para pessoas físicas desde sua criação. A isenção serve como incentivo para atrair recursos para o setor imobiliário. O mesmo vale para a LCA (agronegócio) e, com ressalvas, para as debêntures de infraestrutura.',
    feynman:'LCI é como um CDB, mas com superpoder: você não paga imposto de renda sobre os rendimentos. O governo abriu mão do imposto para atrair investidores para financiar imóveis.',
    macete:'<em>LCI e LCA = Isentos de IR para PF.</em> "LC Imobiliária e Agrícola: Livres do Imposto." Cobre pelo FGC até R$250k.' },
  { id:27, concurso:'bb', subject:'Conhecimentos Bancários', text:'O cheque é uma ordem de pagamento à vista, emitida contra um banco, para que este pague determinada quantia ao portador ou a quem o cheque indicar.', answer:true,
    tecnico:'O cheque é regulado pela <strong>Lei 7.357/1985</strong> e é definido como ordem de pagamento à vista (mesmo que pré-datado, juridicamente é à vista). É um título de crédito emitido contra um banco (sacado) por quem tem fundos disponíveis (emitente/sacador).',
    feynman:'Cheque é como uma "cartinha para o banco" dizendo: "Dá tanto dinheiro para quem apresentar isso aqui." O banco precisa ter o dinheiro disponível na conta do emissor.',
    macete:'<em>Cheque = Ordem de Pagamento À VISTA.</em> "Cheque pré-datado é combinado comercial, não jurídico." Na lei, cheque é sempre à vista.' },
  { id:28, concurso:'bb', subject:'Matemática Financeira', text:'Uma aplicação de R$ 2.000 a uma taxa de 5% ao trimestre em regime de juros compostos, após 1 ano, renderá um montante superior a R$ 2.400.', answer:true,
    tecnico:'1 ano = 4 trimestres. M = 2000×(1,05)⁴ = 2000×1,2155 = <strong>R$ 2.431,01</strong>. De fato superior a R$ 2.400. Em juros simples seria 2000×(1+0,05×4)=2400 — os compostos rendem mais.',
    feynman:'A cada 3 meses, o dinheiro cresce 5%. Mas no próximo trimestre, o 5% incide sobre o total (já crescido), não só sobre os R$2.000 originais. É o "juro sobre juro" que faz o valor ultrapassar R$2.400.',
    macete:'<em>Juros compostos > Simples para t>1.</em> M=C(1+i)^t. 2000×1,05⁴ ≈ 2431. Sempre que t>1 e i>0, compostos superam simples.' },
  { id:29, concurso:'bb', subject:'Português', text:'Em "O funcionário cujo desempenho foi elogiado recebeu promoção", o pronome relativo "cujo" estabelece relação de posse entre o antecedente e o termo seguinte.', answer:true,
    tecnico:'"<strong>Cujo</strong>" é pronome relativo possessivo: relaciona o antecedente ("funcionário") ao termo seguinte ("desempenho"), indicando que o desempenho pertence ao funcionário. "Cujo" concorda em gênero e número com o termo que segue (o possuído), nunca com o antecedente.',
    feynman:'"Cujo" é como dizer "do qual" — "o funcionário do qual o desempenho foi elogiado." É um pronome que indica posse dentro da frase.',
    macete:'<em>CUJO = posse. Concorda com o POSSUÍDO (não com o possuidor).</em> "Cujo, cuja, cujos, cujas — olha o que vem DEPOIS." Nunca: "o funcionário o cujo".' },
  { id:30, concurso:'bb', subject:'Conhecimentos Bancários', text:'O Tesouro Direto é um programa do governo federal que permite a pessoas físicas investirem em títulos públicos federais diretamente pelo site da B3.', answer:false,
    tecnico:'O <strong>Tesouro Direto</strong> é um programa do <em>Tesouro Nacional</em> em parceria com a <strong>B3</strong> (a B3 opera a plataforma). As compras são feitas pelo site do Tesouro Direto ou por home brokers de corretoras. A afirmação de que é "diretamente pelo site da B3" é imprecisa — a plataforma principal é do Tesouro Nacional.',
    feynman:'Você empresta dinheiro para o governo federal comprando "pedacinhos da dívida pública". O programa chama Tesouro Direto e você acessa pelo site do Tesouro Nacional (não pela B3 diretamente).',
    macete:'<em>Tesouro Direto = Tesouro Nacional + B3 (parceria).</em> Site oficial: tesourodireto.com.br. Disponível para PF com valores baixos (a partir de ~R$30).' },
  { id:31, concurso:'bb', subject:'Raciocínio Lógico', text:'Um produto custa R$ 480 e será reajustado em 15%. O novo preço será R$ 552,00.', answer:true,
    tecnico:'480 × 1,15 = 480 + 480×0,15 = 480 + 72 = <strong>R$ 552,00</strong>. Correto.',
    feynman:'15% de 480 = quanto é 10% (48) + 5% (24) = 72. Então 480 + 72 = 552. Dica rápida: calcule 10% e some metade desse valor para 15%.',
    macete:'<em>15% = 10% + 5% (metade do 10%).</em> "10% de 480 = 48; 5% = 24; soma = 72; 480+72=552." Técnica do 10%+5% é rapidíssima em prova.' },
  { id:32, concurso:'bb', subject:'Atualidades Mercado', text:'O Open Finance (antigo Open Banking) permite que clientes autorizem o compartilhamento de seus dados financeiros entre instituições, promovendo maior concorrência no setor bancário.', answer:true,
    tecnico:'O <strong>Open Finance</strong> (Sistema Financeiro Aberto), regulamentado pelo BACEN, permite que dados financeiros dos clientes sejam compartilhados entre instituições autorizadas, mediante consentimento. Ampliou o escopo do Open Banking para seguros, previdência e câmbio.',
    feynman:'Antes, seus dados bancários ficavam "presos" em um banco. Com o Open Finance, você pode autorizar que outros bancos ou fintechs vejam seu histórico e te ofereçam produtos melhores. O controle é seu.',
    macete:'<em>Open Finance = "seus dados, suas regras."</em> Cliente consente, dados fluem, concorrência aumenta, tarifas caem. Regulado pelo BACEN.' },
  { id:33, concurso:'bb', subject:'Conhecimentos Bancários', text:'A bolsa de valores é um mercado organizado onde são negociados exclusivamente títulos de renda variável, como ações.', answer:false,
    tecnico:'A bolsa de valores (no Brasil, a <strong>B3</strong>) negocia tanto títulos de <em>renda variável</em> (ações, ETFs, BDRs, FIIs) quanto títulos de <em>renda fixa</em> e derivativos (contratos futuros, opções, swaps). A afirmação "exclusivamente renda variável" está errada.',
    feynman:'A bolsa é como um grande mercado onde se compra e vende de tudo: ações (renda variável), contratos futuros, opções... Não é só ações.',
    macete:'<em>B3 negocia: ações + derivativos + renda fixa + FIIs.</em> "BOLSA não é só ação." Quando a questão diz "exclusivamente", desconfie!' },
  { id:34, concurso:'bb', subject:'Português', text:'A oração "Para que o banco prosperasse, era preciso inovar" apresenta uma oração subordinada adverbial final.', answer:true,
    tecnico:'A conjunção <strong>"para que"</strong> introduz oração subordinada adverbial <em>final</em>, que indica o fim, objetivo ou propósito do que se enuncia na oração principal. Equivale a "a fim de que". O verbo na oração final vai ao subjuntivo (prosperasse).',
    feynman:'"Para que" responde à pergunta "com qual objetivo?". A finalidade era a prosperação do banco. Isso é uma oração final — indica propósito.',
    macete:'<em>FINAL = "para que", "a fim de que", "com o objetivo de".</em> "Final indica finalidade." Verbo no subjuntivo é indício de oração final ou concessiva.' },
  { id:35, concurso:'bb', subject:'Conhecimentos Bancários', text:'O Comitê de Basileia é um órgão vinculado ao Banco Central Europeu e emite normas de supervisão bancária com força legal obrigatória para todos os países membros do G20.', answer:false,
    tecnico:'O <strong>Comitê de Basileia para Supervisão Bancária</strong> é vinculado ao Banco de Compensações Internacionais (BIS), com sede em Basileia, Suíça. Suas recomendações (Basileia I, II, III) <em>não têm força legal</em> direta — cada país as incorpora voluntariamente em sua legislação.',
    feynman:'O Comitê de Basileia é como um grupo de especialistas que dá conselhos sobre como os bancos devem guardar dinheiro para se proteger de crises. Os países não são obrigados a seguir, mas quase todos seguem.',
    macete:'<em>Basileia = BIS (não BCE) + recomendações (não leis).</em> "Basileia aconselha, cada país decide." Basileia III foca em capital, liquidez e alavancagem.' },
  { id:36, concurso:'bb', subject:'Matemática Financeira', text:'Uma taxa de 12% ao ano equivale exatamente a 1% ao mês em regime de juros compostos.', answer:false,
    tecnico:'Em juros compostos, a conversão é: (1+i_a)=(1+i_m)^12 → i_m=(1,12)^(1/12)−1 ≈ <strong>0,9489%</strong> ao mês (≠ 1%). A equivalência exata de 1% a.m. gera (1,01)^12−1 ≈ 12,68% a.a. A equivalência 12% a.a. = 1% a.m. só vale em juros simples.',
    feynman:'Em juros simples, dividir por 12 funciona. Mas nos compostos, é como dividir o crescimento de uma bola de neve — não é divisão direta. 1% ao mês resulta em mais de 12% no ano quando ocorre capitalização.',
    macete:'<em>Compostos: (1+i_a)=(1+i_m)^12. 12% a.a. ≠ 1% a.m. em compostos.</em> "Na prova, taxa proporcional é para juros simples; taxa equivalente é para juros compostos."' },
  { id:37, concurso:'bb', subject:'Raciocínio Lógico', text:'Se "Nenhum analista é negligente" e "Paulo é analista", pode-se concluir que "Paulo não é negligente".', answer:true,
    tecnico:'Silogismo válido: Premissa 1: Nenhum A é N (∀x: A(x)→¬N(x)). Premissa 2: Paulo é A. Conclusão: Paulo não é N. Forma válida — Modus Ponens aplicado à universal.',
    feynman:'Se "nenhum analista é negligente", isso vale para TODOS os analistas, inclusive Paulo. Como Paulo é analista, ele também não é negligente. Lógica simples!',
    macete:'<em>Nenhum A é B + X é A → X não é B.</em> "Universal negativa + particular afirmativa = particular negativa." Raciocínio válido — sem falácia.' },
  { id:38, concurso:'bb', subject:'Atualidades Mercado', text:'As fintechs são empresas de tecnologia que oferecem serviços financeiros e são reguladas, no Brasil, pelo Banco Central e pela CVM, conforme o serviço prestado.', answer:true,
    tecnico:'As <strong>fintechs</strong> (financial technologies) são reguladas dependendo da atividade: as de crédito/pagamento pelo <em>BACEN</em>; as que atuam no mercado de capitais pela <em>CVM</em>; as de seguros pela <em>SUSEP</em>. O marco regulatório inclui a Lei 14.181/2021 e as normas do BACEN para IPs e SCDs.',
    feynman:'Fintech é startup financeira. Se ela empresta dinheiro, o BACEN cuida. Se ela vende fundos ou ações, a CVM entra. Cada regulador cuida de seu "quintal".',
    macete:'<em>Fintechs: BACEN (crédito/pagamento) + CVM (valores mobiliários) + SUSEP (seguros).</em> "Cada sandália tem seu pé." Conforme o produto, muda o regulador.' },
  { id:39, concurso:'bb', subject:'Português', text:'O vocábulo "outrossim" é um conectivo que expressa adição, equivalente a "além disso" ou "também".', answer:true,
    tecnico:'"<strong>Outrossim</strong>" é advérbio de adição de registro formal/jurídico, sinônimo de "além disso", "ademais", "também". É frequente em textos jurídicos, contratos e petições. Não confundir com "outrossim" como concessão (erro comum).',
    feynman:'"Outrossim" é uma palavra chique para dizer "também" ou "e mais". Muito usada em documentos formais e contratos. "O candidato foi aprovado. Outrossim, foi nomeado." = "...e também foi nomeado."',
    macete:'<em>OUTROSSIM = ADEMAIS = ALÉM DISSO = TAMBÉM.</em> "Outro + sim = também sim." Uso formal. Não confunda com concessão.' },
  { id:40, concurso:'bb', subject:'Conhecimentos Bancários', text:'Debêntures são títulos de dívida emitidos por sociedades anônimas para captar recursos no mercado, não conferindo ao debenturista participação no capital da empresa.', answer:true,
    tecnico:'<strong>Debêntures</strong> (reguladas pela Lei 6.404/76 e Lei 6.385/76) são títulos de crédito que representam dívida da empresa emissora. O debenturista é <em>credor</em>, não sócio — não tem participação no capital (diferente das ações). Podem ter remuneração prefixada, pós-fixada ou híbrida.',
    feynman:'Empresa precisa de dinheiro: pode vender pedaços dela (ações, virar sócio) ou pode tomar emprestado emitindo debentures. Quem compra debenture é credor, não dono da empresa.',
    macete:'<em>DEBÊNTURE = dívida da SA. Debenturista = CREDOR (não sócio).</em> "DeBÊnture = empresa BEBe dinheiro emprestado." Diferente de ação (sócio).' },

  // ══════════════════════════════════
  // SEFAZ — 20 questões
  // ══════════════════════════════════
  { id:41, concurso:'sefaz', subject:'Direito Tributário', text:'O ICMS é um imposto de competência dos estados e do Distrito Federal, sendo não cumulativo e podendo ter suas alíquotas interestaduais fixadas pelo Senado Federal.', answer:true,
    tecnico:'Art. 155, II e §2.º, CF/88: o <strong>ICMS</strong> é de competência estadual/DF, é não cumulativo (compensação do que foi cobrado nas operações anteriores) e suas alíquotas nas operações <em>interestaduais</em> são fixadas por <strong>Resolução do Senado Federal</strong>.',
    feynman:'ICMS é o imposto do estado sobre mercadorias e serviços. "Não cumulativo" significa que você não paga imposto sobre imposto: abate o que já foi cobrado antes. As alíquotas entre estados diferentes são definidas pelo Senado.',
    macete:'<em>ICMS: Estado + Não Cumulativo + Senado fixa interestaduais.</em> "I-C-M-S: Imposto Cobrado Muitas Situações." Senado = árbitro entre estados.' },
  { id:42, concurso:'sefaz', subject:'Direito Tributário', text:'O Imposto de Renda (IR) obedece ao princípio da progressividade, isto é, alíquotas maiores incidem sobre bases de cálculo maiores.', answer:true,
    tecnico:'O <strong>IR</strong> deve observar os critérios de generalidade, universalidade e <em>progressividade</em> (art. 153, §2.º, I, CF/88). Progressividade significa que quanto maior a renda, maior a alíquota, realizando o princípio da capacidade contributiva.',
    feynman:'Quem ganha mais, paga uma porcentagem maior. Quem ganha pouco paga uma porcentagem menor (ou zero). Isso é progressividade — a tributação "progride" com a renda.',
    macete:'<em>IR: progressivo (alíquota cresce com a base).</em> "IR é PRO rico pagar mais." IPTU também pode ser progressivo; IPVA pode ser diferenciado por uso/valor.' },
  { id:43, concurso:'sefaz', subject:'Direito Tributário', text:'A isenção tributária é uma causa de exclusão do crédito tributário, que impede o lançamento tributário após o fato gerador ter ocorrido.', answer:true,
    tecnico:'O CTN (art. 175, I) inclui a <strong>isenção</strong> como causa de <em>exclusão do crédito tributário</em>. A isenção ocorre quando a lei dispensa o pagamento do tributo após ocorrido o fato gerador — distingue-se da imunidade, que é constitucional e impede o próprio surgimento da obrigação.',
    feynman:'A imunidade é como dizer "essa porta nunca existiu" (CF/88 proíbe o tributo). A isenção é como dizer "a porta existe, mas hoje está fechada" (lei dispensa o pagamento).',
    macete:'<em>ISENÇÃO = exclusão do crédito (CTN 175). IMUNIDADE = CF proíbe o tributo.</em> "Imunidade é da Constituição; Isenção é da lei." Ambas impedem o pagamento, mas por razões diferentes.' },
  { id:44, concurso:'sefaz', subject:'Contabilidade', text:'No Balanço Patrimonial, o Patrimônio Líquido representa os recursos de terceiros aplicados na empresa.', answer:false,
    tecnico:'O <strong>Patrimônio Líquido</strong> (PL) representa os recursos dos <em>sócios/acionistas</em> (capital próprio), não de terceiros. Os recursos de terceiros compõem o <em>Passivo</em> (circulante e não circulante). PL = Ativo Total − Passivo Total.',
    feynman:'O Balanço tem 3 partes: o que a empresa TEM (Ativo), o que ela DEVE para outros (Passivo) e o que pertence aos DONOS (Patrimônio Líquido). PL é dos donos, não de credores.',
    macete:'<em>PL = Capital PRÓPRIO (dos donos). Passivo = Capital de TERCEIROS.</em> "PL = Ativo − Passivo." Dívida com banco → Passivo. Investimento do sócio → PL.' },
  { id:45, concurso:'sefaz', subject:'Direito Tributário', text:'O princípio da anterioridade nonagesimal (noventena) determina que nenhum tributo poderá ser cobrado no mesmo exercício financeiro em que tenha sido publicada a lei que o instituiu ou aumentou.', answer:false,
    tecnico:'Esse enunciado descreve o <strong>princípio da anterioridade anual</strong> (art. 150, III, b, CF/88), não a noventena. A <em>anterioridade nonagesimal</em> (art. 150, III, c, CF/88) exige aguardar <em>90 dias</em> após a publicação da lei, independentemente do exercício financeiro. São princípios distintos que devem ser observados conjuntamente.',
    feynman:'Existem duas "travas" antes de cobrar um tributo novo: (1) esperar o próximo ano (anterioridade anual); (2) esperar 90 dias (noventena). A questão confundiu as duas.',
    macete:'<em>Anterioridade ANUAL = próximo exercício. NOVENTENA = 90 dias.</em> "Anual respeita o ANO; Noventena respeita os 90 DIAS." Alguns tributos têm exceções (IPI, II, IE...).' },
  { id:46, concurso:'sefaz', subject:'Contabilidade', text:'A depreciação é a perda de valor de um bem do ativo imobilizado pelo uso, desgaste natural ou obsolescência, sendo reconhecida como despesa no resultado do exercício.', answer:true,
    tecnico:'A <strong>depreciação</strong> (CPC 27 / IAS 16) representa a alocação sistemática do custo de um ativo tangível ao longo de sua vida útil. É registrada a débito de "Despesa de Depreciação" e a crédito de "Depreciação Acumulada" (conta redutora do ativo imobilizado). Afeta o resultado (DRE).',
    feynman:'Um carro novo vale R$50.000. Em 5 anos ele "perde valor" pelo uso. Essa perda de valor contabilizada a cada ano se chama depreciação. É como se parte do custo do carro virasse despesa a cada exercício.',
    macete:'<em>DEPRECIAÇÃO: Tangíveis (imobilizado). AMORTIZAÇÃO: Intangíveis. EXAUSTÃO: Recursos naturais.</em> "DEpreciação = DEsgaste." Fórmula simples: Custo ÷ Vida útil = Depreciação anual (método linear).' },
  { id:47, concurso:'sefaz', subject:'Direito Tributário', text:'O CTN (Código Tributário Nacional) prevê que a obrigação tributária principal tem como objeto o pagamento de tributo ou penalidade pecuniária.', answer:true,
    tecnico:'Art. 113, §1.º, CTN: a obrigação tributária <strong>principal</strong> tem por objeto o pagamento de tributo ou de penalidade pecuniária. A obrigação <em>acessória</em> (§2.º) tem por objeto as prestações positivas ou negativas previstas na legislação (ex.: emitir nota fiscal, escriturar livros).',
    feynman:'A obrigação principal é "pagar". A acessória é "fazer ou não fazer" (emitir nota, entregar declaração). A principal é a mais importante — sem ela não tem tributo.',
    macete:'<em>PRINCIPAL = pagar (dinheiro). ACESSÓRIA = fazer ou não fazer (deveres formais).</em> "Principal = PAGAR. Acessória = BUROCRACIA." Descumprir acessória gera multa (obrigação principal).' },
  { id:48, concurso:'sefaz', subject:'Contabilidade', text:'O Lucro Líquido do exercício, apurado na DRE, é sempre transferido integralmente para as Reservas de Lucros no Patrimônio Líquido.', answer:false,
    tecnico:'O Lucro Líquido pode ser destinado para: (a) <em>Reserva Legal</em> (5% até 20% do capital, obrigatória); (b) <em>Reservas estatutárias</em>; (c) <em>Dividendos</em> (distribuição aos sócios); (d) <em>Reserva de Lucros a Realizar</em>; entre outros. Não vai integralmente para reservas.',
    feynman:'O lucro da empresa pode ir para várias coisas: guardar em reservas, pagar os donos (dividendos) ou cobrir prejuízos. Nunca vai tudo para um só lugar.',
    macete:'<em>Lucro → Reserva Legal + Dividendos + Outras Reservas.</em> "Lucro tem vários destinos." Reserva Legal é obrigatória: 5% ao ano até 20% do capital.' },
  { id:49, concurso:'sefaz', subject:'Direito Tributário', text:'A imunidade tributária recíproca veda que os entes federativos (União, estados, DF e municípios) cobrem impostos uns dos outros sobre seu patrimônio, renda e serviços.', answer:true,
    tecnico:'Art. 150, VI, a, CF/88: é vedado à União, estados, DF e municípios instituir <strong>impostos</strong> sobre o patrimônio, renda ou serviços uns dos outros. Essa imunidade é extensível às autarquias e fundações públicas (§2.º). Não se aplica a taxas ou contribuições.',
    feynman:'O governo federal não pode cobrar imposto de um estado, e um estado não pode cobrar imposto do município. É como se eles tivessem um "acordo de não agressão" tributária entre si.',
    macete:'<em>Imunidade RECÍPROCA = entes entre si + autarquias + fundações.</em> "Federação não tributa a si mesma (em impostos)." Só vale para IMPOSTOS, não taxas.' },
  { id:50, concurso:'sefaz', subject:'Contabilidade', text:'O regime de competência determina que as receitas e despesas devem ser reconhecidas no período em que efetivamente ocorre a entrada ou saída de caixa.', answer:false,
    tecnico:'O que descreve a entrada/saída de caixa é o <strong>regime de caixa</strong>. O <em>regime de competência</em> (accrual basis) determina que receitas e despesas sejam reconhecidas no período em que <em>são geradas ou incorridas</em>, independentemente do pagamento/recebimento. É o padrão das demonstrações contábeis (CPC 00).',
    feynman:'No regime de caixa, você anota quando recebe ou paga. No regime de competência, você anota quando o direito/obrigação nasce — mesmo que o dinheiro não tenha entrado ainda. Empresa vendeu em dezembro, mas recebe em janeiro → anota em dezembro (competência).',
    macete:'<em>COMPETÊNCIA = fato gerador. CAIXA = dinheiro entrou/saiu.</em> "COMPetência = quando COMPetiu (nasceu a obrigação)." Contabilidade usa competência; fluxo de caixa usa o regime de caixa.' },
  { id:51, concurso:'sefaz', subject:'Direito Tributário', text:'O IPTU é um imposto de competência municipal que pode ter alíquotas progressivas em razão do valor do imóvel e da sua utilização.', answer:true,
    tecnico:'Art. 156, I, e §1.º, CF/88 (com redação da EC 29/2000): o <strong>IPTU</strong> pode ter alíquotas progressivas em razão: (I) do <em>valor do imóvel</em>; (II) da <em>localização e uso</em>. Além disso, o IPTU progressivo no tempo (art. 182, §4.º, II) é instrumento de política urbana para forçar o aproveitamento do imóvel.',
    feynman:'Imóvel mais caro pode pagar mais imposto (progressividade pelo valor). Imóvel não utilizado pode ter imposto ainda maior para pressionar o dono a usá-lo. Isso é o IPTU progressivo.',
    macete:'<em>IPTU: Municipal + Progressivo (valor + uso).</em> "IPTU PODE ser progressivo — EC 29/2000 permitiu." Diferente do IR, que DEVE ser progressivo.' },
  { id:52, concurso:'sefaz', subject:'Contabilidade', text:'Na análise de balanços, o índice de liquidez corrente igual a 1 indica que a empresa tem exatamente recursos suficientes no curto prazo para honrar suas dívidas de curto prazo.', answer:true,
    tecnico:'Liquidez Corrente = Ativo Circulante / Passivo Circulante. LC = 1 significa que para cada R$1 de dívida de curto prazo há R$1 de recurso de curto prazo. Não é necessariamente ruim, pois a qualidade dos ativos importa. LC > 1 indica folga; LC < 1 indica insuficiência.',
    feynman:'É como ter exatamente R$1 no bolso para cada R$1 de conta a pagar. Não sobra, não falta. Se sobra (LC > 1), melhor. Se falta (LC < 1), preocupante.',
    macete:'<em>LC = AC/PC. LC=1 → equilíbrio. LC>1 → folga. LC<1 → risco.</em> "LC de 1: na corda bamba." Lembre: Corrente = Curto Prazo.' },
  { id:53, concurso:'sefaz', subject:'Direito Tributário', text:'As contribuições de melhoria são tributos cobrados em razão do exercício do poder de polícia ou da utilização efetiva ou potencial de serviços públicos específicos e divisíveis.', answer:false,
    tecnico:'A descrição do enunciado corresponde às <strong>taxas</strong> (art. 145, II, CF/88 e art. 77, CTN), não às contribuições de melhoria. As <em>contribuições de melhoria</em> (art. 145, III, CF/88) são cobradas em razão de obras públicas de que decorra valorização imobiliária.',
    feynman:'Confundiu dois tributos: Taxa é cobrada por serviço ou poder de polícia (ex.: taxa de licença). Contribuição de Melhoria é cobrada porque a obra pública valorizou seu imóvel (ex.: asfalto na rua).',
    macete:'<em>TAXA = serviço/poder de polícia. CONTRIBUIÇÃO DE MELHORIA = valorização imobiliária por obra pública.</em> "Melhoria = obra + valoriza imóvel = paga."' },
  { id:54, concurso:'sefaz', subject:'Contabilidade', text:'O goodwill (ágio por rentabilidade futura) é reconhecido somente em combinações de negócios, sendo a diferença entre o valor pago na aquisição e o valor justo líquido dos ativos e passivos identificáveis adquiridos.', answer:true,
    tecnico:'CPC 15 / IFRS 3: o <strong>goodwill</strong> surge na combinação de negócios como o excesso do custo de aquisição sobre o valor justo líquido dos ativos identificáveis adquiridos e passivos assumidos. É intangível com vida útil indefinida, sujeito a teste anual de impairment (não amortizável pelo CPC/IFRS).',
    feynman:'Quando uma empresa compra outra por mais do que o "valor contábil" dos ativos, o excesso é o goodwill — é a marca, clientela, reputação. Não dá para tocar, mas tem valor.',
    macete:'<em>Goodwill = Preço Pago − Valor Justo dos Ativos Líquidos.</em> "Good = bom negócio além do tangível." Impairment anual obrigatório; não amortiza (CPC 15).' },
  { id:55, concurso:'sefaz', subject:'Direito Tributário', text:'O prazo decadencial para o Fisco constituir o crédito tributário por meio de lançamento é, em regra, de 5 anos, contados do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado.', answer:true,
    tecnico:'Art. 173, I, CTN: o direito de a Fazenda Pública constituir o crédito tributário extingue-se após <strong>5 anos</strong>, contados do 1.º dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado. Para tributos sujeitos a homologação, usa-se a regra do art. 150, §4.º (5 anos do fato gerador).',
    feynman:'O governo tem 5 anos para "cobrar" (lançar) um tributo. Se passar esse prazo sem cobrar, perdeu o direito. É como uma data de validade para o fiscal lançar o imposto.',
    macete:'<em>DECADÊNCIA = 5 anos para LANÇAR (CTN 173). PRESCRIÇÃO = 5 anos para COBRAR judicialmente (CTN 174).</em> "Decadência vence antes (nasce); Prescrição vence depois (cobra)."' },
  { id:56, concurso:'sefaz', subject:'Contabilidade', text:'O Fluxo de Caixa Operacional negativo sempre indica que a empresa está em situação de insolvência iminente.', answer:false,
    tecnico:'FCO negativo significa que as operações consomem mais caixa do que geram — é preocupante, mas não necessariamente indica insolvência. Empresas em crescimento acelerado podem ter FCO negativo temporariamente, compensado por financiamentos (FCF positivo) ou investimentos. Insolvência exige análise mais ampla.',
    feynman:'Uma startup em crescimento pode gastar mais do que recebe temporariamente, mas levanta dinheiro de investidores. FCO negativo é sinal de alerta, não sentença de morte.',
    macete:'<em>FCO negativo = alerta, não = insolvência automática.</em> "Fluxo de caixa tem 3 categorias: Operacional + Investimento + Financiamento." Olhe o conjunto.' },
  { id:57, concurso:'sefaz', subject:'Direito Tributário', text:'O princípio da legalidade tributária exige que todo tributo seja instituído ou majorado exclusivamente por lei ordinária, vedada a medida provisória.', answer:false,
    tecnico:'O art. 150, I, CF/88 exige lei para criar ou majorar tributos, mas o STF admite <strong>Medidas Provisórias</strong> para tributos que não exijam lei complementar (ex.: IR, IPI, IOF). Alguns tributos exigem lei complementar (IGF, empréstimos compulsórios, impostos residuais). Portanto, a afirmação de vedação absoluta de MP está errada.',
    feynman:'Em regra, imposto novo precisa de lei. Mas o governo pode usar Medida Provisória para certos impostos (não todos). A MP depois vira lei ou caduca em 120 dias.',
    macete:'<em>LEGALIDADE TRIBUTÁRIA: Lei (regra). MP admitida para tributos sem reserva de LC.</em> "MP sim para IR, IPI, IOF. MP não para IGF, Empréstimo Compulsório (precisam de LC)."' },
  { id:58, concurso:'sefaz', subject:'Contabilidade', text:'As IFRS (International Financial Reporting Standards) são emitidas pelo IASB (International Accounting Standards Board) e têm sido adotadas de forma progressiva no Brasil desde 2010.', answer:true,
    tecnico:'O <strong>IASB</strong> emite as IFRS e as IAS (normas anteriores). O Brasil adotou as IFRS para companhias abertas e instituições financeiras a partir de 2010 (Lei 11.638/2007 preparou o terreno). A convergência é gerenciada pelo <em>CPC</em> (Comitê de Pronunciamentos Contábeis) em parceria com o IASB.',
    feynman:'IFRS é como um "idioma contábil universal". O IASB é o órgão que criou e mantém esse idioma. O Brasil adotou esse idioma em 2010 para que nossas demonstrações sejam compreendidas no mundo inteiro.',
    macete:'<em>IASB → IFRS. Brasil adotou em 2010 via CPC.</em> "IASB: I Accounting Standards Board." CPC = adaptador brasileiro das IFRS.' },
  { id:59, concurso:'sefaz', subject:'Direito Tributário', text:'O ISS (Imposto Sobre Serviços) é de competência municipal e incide sobre a prestação de serviços constantes de lista da LC 116/2003, sendo a alíquota máxima de 5% e a mínima de 2%.', answer:true,
    tecnico:'A <strong>LC 116/2003</strong> regula o ISS: competência dos municípios, incide sobre serviços da lista taxativa, alíquota máxima de <em>5%</em> (art. 8.º) e mínima de <em>2%</em> (art. 3.º da LC 157/2016, que alterou a LC 116). A lista é taxativa (fechada), não exemplificativa.',
    feynman:'O ISS é o imposto que o médico, advogado, programador paga para o município onde presta o serviço. A alíquota fica entre 2% e 5%, dependendo do serviço e da cidade.',
    macete:'<em>ISS: Municipal + LC 116/2003 + 2% a 5%.</em> "ISS: Imposto Sobre Serviços. MÍNimo 2, MÁXimo 5." Lista taxativa = só o que está na lista.' },
  { id:60, concurso:'sefaz', subject:'Contabilidade', text:'A DRE (Demonstração do Resultado do Exercício) apura o resultado das operações da empresa em determinado período, sendo elaborada pelo regime de competência.', answer:true,
    tecnico:'A <strong>DRE</strong> é obrigatória pela Lei 6.404/76 e segue o regime de <em>competência</em>: receitas e despesas são reconhecidas quando incorridas/realizadas, independente de pagamento. Estrutura: Receita Bruta → Receita Líquida → Lucro Bruto → EBIT → Lucro Antes do IR → Lucro Líquido.',
    feynman:'A DRE é como o "extrato de desempenho" da empresa: vendeu quanto, gastou quanto, lucrou quanto. E ela usa o regime de competência — conta as vendas feitas, mesmo que ainda não recebidas.',
    macete:'<em>DRE = Regime de Competência. DFC = pode usar caixa ou competência.</em> "DRE de cima para baixo: Receita → Custos → Despesas → Lucro." Obrigatória para S.A.' },

  // ══════════════════════════════════
  // INSS — 20 questões
  // ══════════════════════════════════
  { id:61, concurso:'inss', subject:'Direito Previdenciário', text:'A seguridade social compreende um conjunto integrado de ações destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.', answer:true,
    tecnico:'Art. 194, caput, CF/88: a seguridade social é o tripé <strong>saúde + previdência + assistência social</strong>. É organizada por iniciativa dos Poderes Públicos e da sociedade, com base nos princípios de universalidade, uniformidade, seletividade, distributividade, irredutibilidade e diversidade da base de financiamento.',
    feynman:'A seguridade social é como uma "rede de proteção" do Estado para os cidadãos. Ela tem 3 pilares: saúde (para todos), previdência (para quem contribui) e assistência (para os mais vulneráveis).',
    macete:'<em>Seguridade = Saúde + Previdência + Assistência (SPA).</em> "SPA da Cidadania." Saúde = universal; Previdência = contributiva; Assistência = para quem precisa.' },
  { id:62, concurso:'inss', subject:'Direito Previdenciário', text:'O salário-maternidade é devido exclusivamente à segurada empregada, não sendo extensível à segurada contribuinte individual ou facultativa.', answer:false,
    tecnico:'O salário-maternidade é devido a <em>todas</em> as categorias de seguradas do RGPS: <strong>empregada, empregada doméstica, trabalhadora avulsa, contribuinte individual e facultativa</strong> (art. 71 da Lei 8.213/91). O valor varia conforme a categoria — para a individual/facultativa, é calculado sobre 1/12 dos últimos 12 salários de contribuição.',
    feynman:'Toda mulher segurada pelo INSS tem direito ao salário-maternidade — seja ela CLT, autônoma ou dona de casa que contribui voluntariamente. O valor muda dependendo de como ela contribui.',
    macete:'<em>Salário-maternidade: TODAS as categorias de seguradas.</em> "Mãe é mãe em qualquer categoria." Empregada = salário integral; Individual/Facultativa = 1/12 dos últimos 12 contrib.' },
  { id:63, concurso:'inss', subject:'Direito Previdenciário', text:'A pensão por morte, na vigência da EC 103/2019, corresponde a 100% do valor da aposentadoria do segurado falecido ou daquela a que teria direito, independentemente do número de dependentes.', answer:false,
    tecnico:'A <strong>EC 103/2019</strong> alterou o cálculo da pensão: cota familiar de 50% + 10% por dependente, limitado a 100% (art. 23). Uma cota de 60% para 1 dependente; 70% para 2, e assim por diante. Os 100% só são atingidos com 5 ou mais dependentes. Também há regras diferentes para morte por acidente de trabalho.',
    feynman:'Depois da reforma da previdência, a pensão não é mais automática de 100%. Começa em 60% (para 1 dependente) e sobe 10% por dependente até o máximo de 100% (5 ou mais dependentes).',
    macete:'<em>Pensão (EC 103/2019) = 50% + 10% por dependente (máx. 100%).</em> "1 dependente = 60%. 5+ = 100%." Exceção: morte por acidente do trabalho pode ser 100%.' },
  { id:64, concurso:'inss', subject:'Direito Previdenciário', text:'O período de carência para o auxílio por incapacidade temporária (antigo auxílio-doença) é de 12 contribuições mensais, salvo em caso de acidente de qualquer natureza.', answer:true,
    tecnico:'Art. 25, I, Lei 8.213/91: carência de <strong>12 contribuições mensais</strong>. Exceção: dispensa carência em casos de acidente de qualquer natureza (de trabalho ou não), doença profissional, doença do trabalho e doenças especificadas em lista do INSS (art. 26, II).',
    feynman:'Para receber o auxílio por ficar doente, você precisa ter contribuído pelo menos 12 meses. Mas se for acidente (de carro, por exemplo), não precisa esperar os 12 meses — o INSS paga imediatamente.',
    macete:'<em>Auxílio incapacidade: 12 contribuições. ACIDENTE = sem carência.</em> "12 para doença; 0 para acidente." Memorize as exceções de carência zero: acidente, doenças da lista, pensão por morte.' },
  { id:65, concurso:'inss', subject:'Direito Previdenciário', text:'O segurado especial é aquele que trabalha em regime de economia familiar, como pequenos produtores rurais, pescadores artesanais e indígenas, e contribui sobre a comercialização de sua produção.', answer:true,
    tecnico:'Art. 11, VII, Lei 8.213/91: o <strong>segurado especial</strong> trabalha em regime de economia familiar (sem empregados) — inclui produtor rural, pescador artesanal, indígena, extrativista. Sua contribuição é calculada sobre a receita bruta da <em>comercialização</em> da produção (2,1% a cargo do adquirente ou do próprio segurado).',
    feynman:'O segurado especial é o "agricultor da roça" que trabalha com a família, sem funcionários. Ele não contribui com um valor fixo mensal como os demais — ele contribui quando vende o que produz.',
    macete:'<em>Segurado Especial: rural familiar + pesca artesanal + indígena.</em> "ESPECIAL contribui sobre a VENDA da produção." Carência: comprovação de atividade, não de contribuições.' },
  { id:66, concurso:'inss', subject:'Direito Previdenciário', text:'A aposentadoria programada (por tempo de contribuição + idade) estabelecida pela EC 103/2019 exige, para os homens, 65 anos e 20 anos de contribuição.', answer:true,
    tecnico:'A <strong>EC 103/2019</strong> criou a "aposentadoria programada" (regra permanente): <em>65 anos de idade e 20 anos de contribuição</em> para homens; 62 anos e 15 anos para mulheres. Há também a fórmula de pontos para transição (97/87 em 2020, chegando a 105/100).',
    feynman:'Com a nova regra, homem aposenta com 65 anos e precisa ter trabalhado/contribuído por 20 anos. Mulher aposenta com 62 anos e 15 de contribuição.',
    macete:'<em>H: 65 anos + 20 contrib. M: 62 anos + 15 contrib.</em> "Homem = 65/20. Mulher = 62/15." EC 103/2019 acabou com aposentadoria só por tempo de contribuição.' },
  { id:67, concurso:'inss', subject:'Direito Previdenciário', text:'A contribuição previdenciária do empregado doméstico é de exclusiva responsabilidade do empregador doméstico, sem qualquer encargo do trabalhador.', answer:false,
    tecnico:'A <strong>LC 150/2015</strong> (Lei do Doméstico) estabelece que tanto o empregado quanto o empregador doméstico contribuem para a previdência social: o empregado com alíquotas progressivas sobre o salário (tabela do RGPS) e o empregador com alíquotas sobre a remuneração (8% previdência + FGTS + FGTS multa rescisória + seguro contra acidente).',
    feynman:'Patrão e empregada doméstica pagam juntos o INSS. Não é só o patrão. A doméstica tem desconto no salário, e o patrão paga uma parte extra por cima.',
    macete:'<em>Doméstico: empregado + empregador pagam. LC 150/2015.</em> "Doméstico não é diferente: os dois contribuem." Empregador: 8% prev. + 8% FGTS (+ 3,2% rescisão + seguro).' },
  { id:68, concurso:'inss', subject:'Direito Previdenciário', text:'O auxílio-reclusão é um benefício pago diretamente ao segurado de baixa renda que se encontra preso em regime fechado ou semiaberto.', answer:false,
    tecnico:'O <strong>auxílio-reclusão</strong> (art. 80, Lei 8.213/91) é pago aos <em>dependentes</em> do segurado de baixa renda que se encontra preso (regime fechado ou semiaberto). Não é pago ao preso em si. A condição de "baixa renda" refere-se ao segurado, e o valor é calculado sobre o último salário de contribuição.',
    feynman:'Quando um trabalhador que contribuía ao INSS vai preso, a família dele (os dependentes) recebe o auxílio-reclusão. É para ajudar a família que ficou sem a renda do trabalhador.',
    macete:'<em>Auxílio-reclusão: pago aos DEPENDENTES (não ao preso). Segurado de baixa renda.</em> "A família do preso recebe, não o preso." Fechado ou semiaberto — não em liberdade.' },
  { id:69, concurso:'inss', subject:'Direito Administrativo', text:'O INSS é uma autarquia federal vinculada ao Ministério da Previdência Social, dotada de personalidade jurídica de direito público.', answer:true,
    tecnico:'O <strong>INSS</strong> (Instituto Nacional do Seguro Social) foi criado pelo Decreto 99.350/1990, resultado da fusão do IAPAS e INAMPS. É uma autarquia federal (personalidade jurídica de direito público), vinculada ao <em>Ministério da Previdência Social</em>, responsável pela operacionalização dos benefícios do RGPS.',
    feynman:'O INSS é uma espécie de "braço operacional" do governo para pagar as aposentadorias e benefícios. É uma autarquia — empresa pública de direito público, como uma repartição especializada.',
    macete:'<em>INSS = Autarquia Federal + Dir. Público + Min. Previdência Social.</em> "INSS administra o RGPS." Criado em 1990 (fusão IAPAS+INAMPS).' },
  { id:70, concurso:'inss', subject:'Direito Previdenciário', text:'O salário de benefício é a média aritmética simples dos maiores salários de contribuição correspondentes a 80% de todo o período contributivo para todos os benefícios do RGPS.', answer:false,
    tecnico:'Pela <strong>EC 103/2019</strong>, o salário de benefício é calculado pela média aritmética simples de <em>100% dos salários de contribuição</em> desde julho de 1994 (ou desde o início da contribuição), não mais 80% dos maiores. A regra dos 80% era da Lei 9.876/1999 e foi revogada.',
    feynman:'Antes, o INSS pegava os 80% melhores salários para calcular sua aposentadoria (descartava os 20% piores). Depois da reforma de 2019, usa TODOS os salários — incluindo os piores. Isso geralmente reduz o benefício.',
    macete:'<em>Pós-EC 103/2019: 100% dos salários (não 80% dos maiores).</em> "A reforma acabou com o descarte dos piores 20%." Média de todos = geralmente menor benefício.' },
  { id:71, concurso:'inss', subject:'Direito Previdenciário', text:'O BPC/LOAS é um benefício da assistência social, não previdenciário, e por isso não integra o RGPS e não gera direito à percepção de 13.º salário.', answer:true,
    tecnico:'O <strong>BPC</strong> (Benefício de Prestação Continuada) é regido pela LOAS (Lei 8.742/93), sendo benefício de assistência social — não previdenciário. Por isso, não é custeado por contribuições e <em>não gera 13.º salário</em>. Destinado ao idoso (65+) e à pessoa com deficiência sem meios de prover o sustento (renda per capita ≤ 1/4 do SM).',
    feynman:'O BPC é como um "socorro" para quem não contribuiu ao INSS mas precisa de renda mínima. Como não é previdência, não tem 13.º — é diferente da aposentadoria.',
    macete:'<em>BPC: Assistência Social (não previdência) = sem 13.º.</em> "BPC não é INSS, é LOAS." Aposentadoria do INSS tem 13.º. BPC não. Ambos valem 1 salário mínimo.' },
  { id:72, concurso:'inss', subject:'Direito Previdenciário', text:'O prazo para requerer o auxílio por incapacidade temporária é imprescritível, podendo o segurado pleiteá-lo a qualquer tempo após o surgimento da incapacidade.', answer:false,
    tecnico:'O direito ao benefício em si não prescreve (imprescritibilidade), mas as <em>prestações não reclamadas</em> prescrevem em <strong>5 anos</strong> (art. 103, Lei 8.213/91). Além disso, o auxílio é devido a partir da incapacidade, mas o INSS pode exigir que o segurado requeira o benefício — o pagamento retroage até 30 dias antes do requerimento se formulado após esse prazo.',
    feynman:'Você pode pedir o benefício a qualquer tempo, mas as parcelas que não pediu antes de 5 anos "caducam". É como uma dívida — o direito existe, mas você perde as prestações muito antigas.',
    macete:'<em>Benefício = imprescritível. Prestações = prescrição em 5 anos.</em> "Corre rápido: esperar demais faz perder as prestações passadas."' },
  { id:73, concurso:'inss', subject:'Direito Previdenciário', text:'O trabalhador que se desliga voluntariamente do emprego, sem justa causa, perde imediatamente a qualidade de segurado do RGPS.', answer:false,
    tecnico:'O art. 15, II, Lei 8.213/91 garante o <strong>período de graça</strong>: após a cessação do vínculo empregatício, o segurado mantém a qualidade por <em>12 meses</em> (prorrogável para 24 meses com mais de 120 contribuições, e até 36 meses para desemprego involuntário comprovado). O desligamento voluntário mantém o período de graça de 12 meses.',
    feynman:'Mesmo depois de pedir demissão, você ainda fica protegido pelo INSS por 12 meses sem pagar. É o "período de graça" — como uma carência de saída.',
    macete:'<em>Período de graça após demissão: 12 meses (padrão), 24 (>120 contrib.), 36 (desemprego involuntário).</em> "Graça = proteção sem contribuir." Voluntário ≠ involuntário para o prazo.' },
  { id:74, concurso:'inss', subject:'Direito Previdenciário', text:'A aposentadoria especial é devida ao segurado que trabalhou sujeito a condições especiais prejudiciais à saúde, sendo concedida após 15, 20 ou 25 anos de exposição, conforme o grau de nocividade.', answer:true,
    tecnico:'Art. 57, Lei 8.213/91: a <strong>aposentadoria especial</strong> é concedida ao segurado que laborou em condições especiais (agentes físicos, químicos ou biológicos nocivos à saúde/integridade física) por <em>15 anos</em> (grau máximo), <em>20 anos</em> (médio) ou <em>25 anos</em> (mínimo). A carência é de 180 contribuições.',
    feynman:'Quem trabalha exposto a ruído alto, produtos químicos ou doenças pode se aposentar mais cedo. Quanto mais perigoso o agente, menos anos precisa trabalhar para se aposentar especialmente.',
    macete:'<em>Especial: 15 (máx. nocivo), 20 (médio), 25 (mínimo).</em> "MAIS perigoso, MENOS tempo." Exemplos: 15 anos = mineração em subsolo; 25 anos = poeira em escritório de gráfica.' },
  { id:75, concurso:'inss', subject:'Direito Constitucional', text:'Segundo a CF/88, a saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença, sendo o acesso às ações e serviços de saúde universal e igualitário.', answer:true,
    tecnico:'Art. 196, CF/88: "A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação."',
    feynman:'No Brasil, qualquer pessoa — rica, pobre, trabalhadora ou não — tem direito ao SUS. O Estado é obrigado a garantir saúde para todos, não só para quem paga INSS.',
    macete:'<em>Saúde: UNIVERSAL (todos) + IGUALITÁRIO + Dever do Estado.</em> "SUS = Sistema ÚNICO de Saúde = para todos, igual." Diferente da previdência, que exige contribuição.' },
  { id:76, concurso:'inss', subject:'Direito Previdenciário', text:'O fator previdenciário é aplicado obrigatoriamente no cálculo de todas as modalidades de aposentadoria do RGPS, inclusive após a EC 103/2019.', answer:false,
    tecnico:'A <strong>EC 103/2019</strong> eliminou a aposentadoria por tempo de contribuição (onde o fator era mais relevante) e criou a aposentadoria programada (por idade+tempo). O fator previdenciário tornou-se de aplicação muito restrita, sendo usado apenas quando beneficia o segurado na regra de transição por pontos. Na regra permanente, não se aplica.',
    feynman:'O fator previdenciário era como um "penalizador" para quem se aposentava cedo. A reforma de 2019 mudou o sistema e agora o fator só aparece se beneficiar o segurado.',
    macete:'<em>Fator previdenciário: praticamente superado pela EC 103/2019.</em> "A reforma aposentou o fator." Só ainda relevante em algumas regras de transição.' },
  { id:77, concurso:'inss', subject:'Direito Previdenciário', text:'É vedada a filiação ao RGPS como segurado facultativo de pessoa participante de regime próprio de previdência social (RPPS).', answer:true,
    tecnico:'Art. 11, §4.º, Lei 8.213/91 (e Regulamento): o servidor público vinculado a <strong>RPPS</strong> não pode se filiar ao RGPS como segurado facultativo. A filiação facultativa é vedada também para menores de 16 anos. Trata-se de proteção ao sistema previdenciário para evitar dupla cobertura obrigatória.',
    feynman:'Servidor público já tem seu próprio regime (RPPS) — não pode pagar INSS voluntariamente também. É como não poder ter dois planos de saúde do mesmo tipo ao mesmo tempo.',
    macete:'<em>RPPS + RGPS Facultativo = VEDADO.</em> "Servidor do RPPS não pode ser facultativo no RGPS." Exceção: se o servidor também tem emprego privado paralelo, aí há vinculação obrigatória ao RGPS como empregado.' },
  { id:78, concurso:'inss', subject:'Direito Previdenciário', text:'O reajuste dos benefícios do RGPS é garantido constitucionalmente, preservando-se o valor real, conforme critérios definidos em lei.', answer:true,
    tecnico:'Art. 201, §4.º, CF/88: é assegurado o <strong>reajustamento dos benefícios</strong> para preservar-lhes, em caráter permanente, o valor real, conforme critérios definidos em lei. O INPC é o índice historicamente utilizado para o reajuste anual dos benefícios acima do salário mínimo.',
    feynman:'Sua aposentadoria não pode perder o poder de compra com o tempo. A Constituição garante que o INSS reajuste os benefícios para acompanhar a inflação.',
    macete:'<em>Reajuste do RGPS: preservação do valor real (CF 201, §4.º).</em> "Real = não perde para a inflação." Índice de reajuste definido em lei (historicamente INPC).' },
  { id:79, concurso:'inss', subject:'Direito Previdenciário', text:'O segurado que se aposentar pelo RGPS e retornar à atividade remunerada abrangida pelo regime não pode acumular o benefício com o salário, devendo suspender a aposentadoria.', answer:false,
    tecnico:'O aposentado que retorna à atividade laborativa <em>acumula</em> o benefício com a remuneração — não há suspensão. Contudo, o retorno gera nova obrigação contributiva (art. 18, §2.º, Lei 8.213/91). Após a EC 103/2019, não há mais direito a novo benefício pela contribuição após a aposentadoria (exceto aposentadoria por incapacidade e algumas exceções).',
    feynman:'Aposentou e voltou a trabalhar? Pode receber os dois (aposentadoria + salário). Mas precisa pagar INSS de novo. Porém, essa contribuição nova não dará direito a nova aposentadoria.',
    macete:'<em>Aposentado que volta ao trabalho: ACUMULA salário + benefício.</em> "Aposenta e volta: recebe os dois." Mas contribui e não gera novo benefício (EC 103).' },
  { id:80, concurso:'inss', subject:'Direito Previdenciário', text:'A carência para o salário-maternidade no caso da segurada contribuinte individual é de dez contribuições mensais.', answer:true,
    tecnico:'Art. 25, III, Lei 8.213/91: a carência para o salário-maternidade da <strong>segurada contribuinte individual e facultativa</strong> é de <em>10 contribuições mensais</em>. Para empregadas, domésticas e avulsas, o salário-maternidade independe de carência.',
    feynman:'A autônoma/MEI precisa ter contribuído por 10 meses antes do parto para ter direito ao salário-maternidade. Já a empregada CLT não precisa de carência mínima.',
    macete:'<em>Salário-maternidade: Individual/Facultativa = 10 contrib. Empregada/Doméstica/Avulsa = SEM carência.</em> "10 meses para a autônoma; zero para a CLT."' },

  // ══════════════════════════════════
  // IBGE — 20 questões
  // ══════════════════════════════════
  { id:81, concurso:'ibge', subject:'Estatística', text:'A média aritmética de um conjunto de dados é sempre um valor que pertence ao próprio conjunto.', answer:false,
    tecnico:'A <strong>média aritmética</strong> é a soma dos valores dividida pela quantidade de elementos. Ela pode ser um valor que não pertença ao conjunto. Ex.: {1, 3} → média = 2, que não está no conjunto. Apenas a mediana tem a propriedade de pertencer ao conjunto (em conjuntos de tamanho ímpar).',
    feynman:'A média de 1 e 3 é 2 — mas 2 não está no conjunto! A média é um cálculo que pode resultar em número "de fora". Por isso dizemos que a média é uma medida de centro, não necessariamente um valor observado.',
    macete:'<em>Média NÃO precisa pertencer ao conjunto.</em> "A média de 1 e 3 é 2 — mas 2 não existe aí." Mediana (em ímpar) pertence ao conjunto; moda também.' },
  { id:82, concurso:'ibge', subject:'Estatística', text:'O IBGE é responsável pela realização do Censo Demográfico brasileiro, que deve ocorrer a cada 10 anos, segundo o padrão recomendado pela ONU.', answer:true,
    tecnico:'O <strong>IBGE</strong> (Instituto Brasileiro de Geografia e Estatística) realiza o Censo Demográfico com periodicidade decenal (a cada 10 anos), em conformidade com as recomendações da ONU. O último Censo foi em 2022 (com atraso em relação a 2020 pela pandemia), e o anterior em 2010.',
    feynman:'O Censo é como uma "foto completa" da população brasileira — quem somos, onde moramos, quanto ganhamos. O IBGE tira essa foto a cada 10 anos visitando todas as casas do país.',
    macete:'<em>IBGE + Censo Decenal (10 anos) + padrão ONU.</em> "IBGE conta o Brasil a cada DÉCADA." Último: 2022. Próximo: 2032.' },
  { id:83, concurso:'ibge', subject:'Estatística', text:'Em uma distribuição normal (curva de Gauss), a média, a mediana e a moda coincidem no mesmo valor e a curva é simétrica em relação a esse ponto.', answer:true,
    tecnico:'Na <strong>distribuição normal</strong> (gaussiana), por ser perfeitamente simétrica e unimodal: média = mediana = moda. A curva tem formato de sino, com assimetria zero. 68% dos dados estão a ±1 desvio padrão da média; 95% a ±2σ; 99,7% a ±3σ (regra 68-95-99,7).',
    feynman:'Pense no resultado de mil lançamentos de moeda. A maioria cai perto da metade (50% cara/coroa) e poucos resultados ficam nos extremos. Isso forma a "curva de sino" — a distribuição normal.',
    macete:'<em>Normal: Média = Mediana = Moda + Simétrica.</em> "Normal é igual para todos." Regra: 68-95-99,7%. Assimetria = 0. Curtose = 3.' },
  { id:84, concurso:'ibge', subject:'Raciocínio Lógico', text:'O conjunto dos números naturais é infinito e enumerável (contável), enquanto o conjunto dos números reais é infinito e não enumerável.', answer:true,
    tecnico:'Georg Cantor provou que ℕ (naturais) é <strong>infinito enumerável</strong> — há uma bijeção com os inteiros positivos. Já ℝ (reais) é <strong>infinito não enumerável</strong> (teorema da diagonal de Cantor): não existe bijeção entre ℕ e ℝ. O cardinal de ℝ é estritamente maior que o de ℕ (|ℝ| = c > ℵ₀ = |ℕ|).',
    feynman:'Contar os naturais (1,2,3...) é possível mesmo que nunca termine. Mas os reais são "mais infinitos" — entre 0 e 1 há infinitos números que nunca conseguiríamos listar em ordem, por mais que tentássemos.',
    macete:'<em>ℕ = infinito CONTÁVEL. ℝ = infinito NÃO CONTÁVEL.</em> "Cantor provou que há infinitos maiores que outros." ℕ < ℤ equivale mas ℕ << ℝ em cardinalidade.' },
  { id:85, concurso:'ibge', subject:'Estatística', text:'O desvio padrão é uma medida de dispersão que indica o quanto, em média, os valores de um conjunto se afastam da média aritmética.', answer:true,
    tecnico:'O <strong>desvio padrão</strong> (σ ou s) é a raiz quadrada da variância — mede a dispersão dos dados em torno da média na mesma unidade dos dados. Quanto maior o desvio padrão, mais os dados estão espalhados em torno da média; quanto menor, mais concentrados.',
    feynman:'Imagine dois times com média de 5 gols por jogo. Um time faz 5 gols toda semana (DP baixo). O outro faz 10 gols em uma semana e 0 na outra (DP alto). O desvio padrão mede essa variação.',
    macete:'<em>DP = √Variância. Mede dispersão em torno da média.</em> "DP alto = dados espalhados; DP baixo = dados concentrados." DP sempre ≥ 0.' },
  { id:86, concurso:'ibge', subject:'Português', text:'Na frase "Os dados coletados pelo IBGE foram analisados minuciosamente", o sujeito da oração é "Os dados coletados pelo IBGE".', answer:true,
    tecnico:'"Os dados coletados pelo IBGE" é o sujeito simples da oração — trata-se do sujeito que pratica/sofre a ação verbal. O verbo é "foram analisados" (voz passiva analítica). O sujeito inclui o núcleo "dados" e o adjunto adnominal "coletados pelo IBGE" (oração reduzida de particípio).',
    feynman:'O sujeito é "quem" ou "o que" está em destaque na frase — aqui são os dados que foram analisados. "Coletados pelo IBGE" é apenas uma descrição dos dados, não um sujeito separado.',
    macete:'<em>Sujeito = núcleo + adjuntos. Voz passiva: sujeito = quem sofre a ação.</em> "Foram analisados O QUÊ? Os dados." Sujeito encontrado perguntando ao verbo.' },
  { id:87, concurso:'ibge', subject:'Estatística', text:'Um histograma é utilizado para representar a distribuição de variáveis qualitativas nominais.', answer:false,
    tecnico:'O <strong>histograma</strong> é adequado para variáveis <em>quantitativas contínuas</em> (ou discretas com muitas categorias), representando a distribuição de frequências por classes. Para variáveis <em>qualitativas nominais</em>, os gráficos adequados são barras simples, gráfico de setores (pizza) ou pictogramas.',
    feynman:'Histograma é para dados de medição (altura, peso, renda). Para categorias como "cor favorita" ou "estado civil", usamos gráfico de barras ou pizza — não histograma.',
    macete:'<em>HISTOGRAMA → quantitativo contínuo. BARRAS → qualitativo/discreto.</em> "HiSTOgrama = dados com história contínua." Barras têm espaços entre elas; histograma não.' },
  { id:88, concurso:'ibge', subject:'Raciocínio Lógico', text:'Em um escritório com 100 servidores, 60 usam notebook e 55 usam tablet. Sabe-se que todos usam pelo menos um dos dois dispositivos. Então, 15 servidores usam ambos.', answer:true,
    tecnico:'Inclusão-Exclusão: |N∪T|=|N|+|T|−|N∩T| → 100=60+55−|N∩T| → |N∩T|=<strong>15</strong>. Correto.',
    feynman:'60+55=115. Mas só tem 100 pessoas. As 15 "extras" são as que foram contadas duas vezes — ou seja, as 15 que usam os dois.',
    macete:'<em>A∩B = A+B − A∪B = 60+55−100 = 15.</em> "Inclui, exclui a interseção." Fórmula padrão de conjuntos — cai sempre em concurso.' },
  { id:89, concurso:'ibge', subject:'Informática', text:'O protocolo HTTPS utiliza certificados SSL/TLS para cifrar a comunicação entre o navegador do usuário e o servidor web, garantindo confidencialidade e integridade dos dados transmitidos.', answer:true,
    tecnico:'O <strong>HTTPS</strong> (HTTP Secure) emprega protocolos criptográficos <em>SSL</em> (Security Sockets Layer) ou seu sucessor <em>TLS</em> (Transport Layer Security) para cifrar o canal de comunicação. Garante: confidencialidade (ciframento), integridade (hashing) e autenticidade (certificados digitais emitidos por autoridades certificadoras).',
    feynman:'Quando você vê o cadeado no navegador, é o HTTPS funcionando. É como enviar uma carta em um envelope lacrado e com código secreto — só você e o site conseguem ler.',
    macete:'<em>HTTPS = HTTP + TLS/SSL = criptografia + integridade + autenticidade.</em> "HTTPS: o S é de Seguro." Porta 443 (HTTP usa 80).' },
  { id:90, concurso:'ibge', subject:'Estatística', text:'A moda de um conjunto de dados é o valor que aparece com maior frequência, podendo um conjunto ser amodal, unimodal, bimodal ou multimodal.', answer:true,
    tecnico:'A <strong>moda</strong> é a medida de tendência central que indica o(s) valor(es) mais frequente(s). Um conjunto é: <em>amodal</em> (sem moda — todos com mesma freq.); <em>unimodal</em> (uma moda); <em>bimodal</em> (duas modas); <em>multimodal</em> (várias modas).',
    feynman:'Moda é como a "febre do momento" nos dados — o valor mais popular. Uma turma pode ter dois valores empatados em popularidade (bimodal) ou nenhum favorito (amodal).',
    macete:'<em>Moda = valor mais frequente. Amodal/Uni/Bi/Multimodal.</em> "MODA = o mais popular." Em distribuição normal: moda=média=mediana. Em assimétrica: diferem.' },
  { id:91, concurso:'ibge', subject:'Informática', text:'SQL (Structured Query Language) é uma linguagem de programação orientada a objetos utilizada para manipular bancos de dados relacionais.', answer:false,
    tecnico:'<strong>SQL</strong> é uma linguagem <em>declarativa</em> (não orientada a objetos) para consulta e manipulação de bancos de dados relacionais. Possui subconjuntos: DDL (definição), DML (manipulação), DCL (controle) e TCL (transação). A orientação a objetos é característica de linguagens como Java, Python, C++.',
    feynman:'SQL é a linguagem para "conversar" com um banco de dados. Você diz o QUÊ quer (SELECT, INSERT...) e o banco descobre o como. Não é programação orientada a objetos — é declarativa.',
    macete:'<em>SQL = declarativa (não OO). SELECT, INSERT, UPDATE, DELETE.</em> "SQL: fala o que quer, o banco faz." Orientada a objetos: Java, Python, C#.' },
  { id:92, concurso:'ibge', subject:'Estatística', text:'O índice de Gini varia entre 0 e 1, sendo que 0 representa perfeita igualdade e 1 representa máxima desigualdade na distribuição de renda.', answer:true,
    tecnico:'O <strong>coeficiente de Gini</strong> mede a desigualdade de distribuição. Varia de 0 (perfeita igualdade — todos com a mesma renda) a 1 (máxima desigualdade — uma pessoa tem toda a renda). O Brasil historicamente tem Gini alto (~0,52), sendo um dos países mais desiguais do mundo.',
    feynman:'Imagina que 0 = todo mundo ganha igual. 1 = uma pessoa ganha tudo e o resto nada. O Gini do Brasil fica por volta de 0,5 — bem no meio, indicando alta desigualdade.',
    macete:'<em>GINI: 0 = igualdade total; 1 = desigualdade máxima.</em> "Gini 0 = igual; Gini 1 = um leva tudo." Brasil ≈ 0,52 (elevado).' },
  { id:93, concurso:'ibge', subject:'Raciocínio Lógico', text:'A probabilidade de se obter pelo menos um 6 em dois lançamentos de um dado honesto é de 11/36.', answer:true,
    tecnico:'P(pelo menos um 6) = 1 − P(nenhum 6) = 1 − (5/6)² = 1 − 25/36 = <strong>11/36</strong>. Alternativa: P(6 no 1.º) + P(6 no 2.º) − P(6 nos dois) = 1/6 + 1/6 − 1/36 = 12/36 − 1/36 = 11/36.',
    feynman:'É mais fácil calcular o contrário: qual a chance de NÃO sair nenhum 6? 5/6 × 5/6 = 25/36. Logo a chance de sair pelo menos um 6 é 1 − 25/36 = 11/36.',
    macete:'<em>P(pelo menos 1) = 1 − P(nenhum).</em> "Complemento é o atalho para probabilidade." Nenhum 6 = (5/6)² = 25/36. Pelo menos 1 = 1 − 25/36 = 11/36.' },
  { id:94, concurso:'ibge', subject:'Português', text:'A expressão "a priori" deve ser grafada em itálico ou entre aspas nos textos formais por ser uma expressão latina de uso em língua estrangeira.', answer:false,
    tecnico:'"<strong>A priori</strong>" e outras expressões latinas incorporadas ao uso corrente do português (como <em>a posteriori, status, curriculum, etc.</em>) podem ser grafadas em itálico por convenção editorial, mas o Vocabulário Ortográfico da Língua Portuguesa (VOLP) e a norma da ABL não obrigam o itálico para latinismos já incorporados. O uso do itálico é recomendação de estilo, não regra ortográfica obrigatória.',
    feynman:'Palavras latinas muito usadas no português (como "a priori") são aceitas no idioma. O itálico é uma opção de estilo para evidenciar a origem, mas não é obrigatório.',
    macete:'<em>Latinismos incorporados: itálico é opção, não obrigação.</em> "A priori, in loco, in vitro" — convencionalmente em itálico nos textos acadêmicos, mas não é regra ortográfica absoluta.' },
  { id:95, concurso:'ibge', subject:'Informática', text:'A nuvem computacional (cloud computing) permite o acesso sob demanda a recursos computacionais compartilhados, como servidores, armazenamento e softwares, via internet.', answer:true,
    tecnico:'O <strong>cloud computing</strong> é definido pelo NIST como um modelo para acesso conveniente e sob demanda a um pool compartilhado de recursos computacionais configuráveis (redes, servidores, armazenamento, aplicativos) que podem ser rapidamente provisionados e liberados com mínimo esforço de gerenciamento. Modelos: IaaS, PaaS, SaaS.',
    feynman:'Cloud computing é como alugar um computador potentíssimo pela internet em vez de comprá-lo. Você usa o quanto precisa e paga só pelo que usar — como conta de luz.',
    macete:'<em>Cloud: IaaS (infra) + PaaS (plataforma) + SaaS (software).</em> "I Pago o Serviço: IaaS-PaaS-SaaS." Exemplos: IaaS=AWS EC2; PaaS=Heroku; SaaS=Gmail.' },
  { id:96, concurso:'ibge', subject:'Estatística', text:'Uma amostra estratificada proporcional garante que cada estrato da população esteja representado na amostra na mesma proporção em que ocorre na população.', answer:true,
    tecnico:'Na <strong>amostragem estratificada proporcional</strong>, a população é dividida em grupos homogêneos (estratos) e a amostra de cada estrato é proporcional ao tamanho do estrato na população. Ex.: se 30% da pop. é de jovens, 30% da amostra será de jovens.',
    feynman:'Imagine uma escola com 60% mulheres e 40% homens. Na amostra estratificada proporcional, você seleciona respeitando esses percentuais. Assim a pesquisa representa fielmente a realidade.',
    macete:'<em>Estratificada proporcional: proporção da amostra = proporção da população por estrato.</em> "Cada grupo fica com seu pedaço proporcional." Reduz o erro amostral.' },
  { id:97, concurso:'ibge', subject:'Raciocínio Lógico', text:'Se hoje é terça-feira, daqui a 100 dias será sexta-feira.', answer:false,
    tecnico:'100 ÷ 7 = 14 semanas e 2 dias. Terça + 2 = <strong>quinta-feira</strong>, não sexta. Cálculo: 14×7=98 dias → mesma semana (terça). +2 dias = quinta-feira.',
    feynman:'Divide 100 dias por 7 (dias da semana) para ver quantas semanas completas tem. Sobram 2 dias. Terça + 2 dias = quarta (1), quinta (2). Então será quinta!',
    macete:'<em>100 mod 7 = 2. Terça + 2 dias = Quinta.</em> "Para achar o dia, divide por 7 e pega o RESTO." 100 = 14×7 + 2. Resto 2 a partir de terça = quinta.' },
  { id:98, concurso:'ibge', subject:'Informática', text:'O phishing é um tipo de ataque cibernético que visa enganar o usuário para que ele revele informações sensíveis, como senhas e dados bancários, geralmente por meio de e-mails ou sites falsos.', answer:true,
    tecnico:'O <strong>phishing</strong> (engenharia social) é um ataque em que criminosos se disfarçam de entidades confiáveis (bancos, governo, empresas) para induzir vítimas a fornecer dados confidenciais. Variantes: spear phishing (direcionado), smishing (SMS), vishing (voz).',
    feynman:'Phishing é como um pescador jogando isca. O "anzol" é um e-mail falso do banco dizendo que sua conta foi bloqueada. Você clica no link, digita sua senha... e o criminoso captura tudo.',
    macete:'<em>PHISHING = engano para capturar dados sensíveis.</em> "Phishing pesca senha." Variantes: Spear (direcionado), Smishing (SMS), Vishing (ligação). Prevenção: verificar URL, não clicar em links suspeitos.' },
  { id:99, concurso:'ibge', subject:'Estatística', text:'A mediana de um conjunto de dados com 10 elementos é a média aritmética do 5.º e do 6.º valores após a ordenação dos dados em ordem crescente.', answer:true,
    tecnico:'Para n par, a <strong>mediana</strong> é a média dos dois valores centrais: o (n/2).º e o (n/2+1).º elementos, após ordenação. Para n=10: mediana = (5.º + 6.º) / 2. Para n ímpar, é o valor central diretamente: (n+1)/2.ésimo.',
    feynman:'Organiza os 10 números em ordem. Os do meio são o 5.º e o 6.º. A mediana é a média desses dois valores. É o "equilíbrio" do conjunto — metade dos dados acima, metade abaixo.',
    macete:'<em>n par: mediana = média dos dois centrais. n ímpar: mediana = valor central.</em> "Par: divide no meio e faz a média. Ímpar: pega o do meio direto."' },
  { id:100, concurso:'ibge', subject:'Informática', text:'O sistema operacional Linux é de código aberto (open source), distribuído gratuitamente sob licenças como a GPL (General Public License), sendo amplamente utilizado em servidores.', answer:true,
    tecnico:'O <strong>Linux</strong> (kernel criado por Linus Torvalds em 1991) é open source sob a <em>GPL v2</em>. As distribuições (Ubuntu, Debian, Red Hat, etc.) são em sua maioria gratuitas. O Linux domina o mercado de servidores (~96% dos maiores servidores do mundo), supercomputadores e dispositivos Android.',
    feynman:'Linux é como um motor de carro que qualquer um pode ver, modificar e compartilhar. O código está disponível para todos, e empresas constroem seus sistemas em cima dele.',
    macete:'<em>Linux: Open Source + GPL + domina servidores.</em> "Linux é livre e reina em servidores." Android usa kernel Linux. Torvalds criou em 1991 baseado no Unix.' },
];

// ─────────────────────────────────────────────────────────
// ESTADO
// ─────────────────────────────────────────────────────────
let st = {
  concurso: null,
  questions: [],
  current: 0,
  correct: 0,
  wrong: 0,
  answered: false,
};

// ─────────────────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────────────────
const $  = id => document.getElementById(id);
const pad = n  => String(n).padStart(2,'0');

function saveProgress() {
  localStorage.setItem('aprova_progress', JSON.stringify({
    concurso: st.concurso,
    current: st.current,
    correct: st.correct,
    wrong: st.wrong,
  }));
}

function loadProgress(concursoId) {
  try {
    const data = JSON.parse(localStorage.getItem('aprova_progress') || 'null');
    if (data && data.concurso === concursoId && data.current > 0) {
      return data;
    }
  } catch(e) {}
  return null;
}

function clearProgress() {
  localStorage.removeItem('aprova_progress');
}

// ─────────────────────────────────────────────────────────
// TIMER DE URGÊNCIA (60 dias fictícios de countdown)
// ─────────────────────────────────────────────────────────
function startTimer() {
  const stored = localStorage.getItem('aprova_target_date');
  let target;
  if (stored) {
    target = new Date(parseInt(stored));
  } else {
    target = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);
    localStorage.setItem('aprova_target_date', target.getTime());
  }

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) { $('td-d').textContent='00'; $('td-h').textContent='00'; $('td-m').textContent='00'; $('td-s').textContent='00'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    $('td-d').textContent = pad(d);
    $('td-h').textContent = pad(h);
    $('td-m').textContent = pad(m);
    $('td-s').textContent = pad(s);
  }
  update();
  setInterval(update, 1000);
}

// ─────────────────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────────────────
function renderDashboard() {
  const grid = $('concursos-grid');
  grid.innerHTML = '';

  CONCURSOS.forEach(c => {
    const qs = ALL_QUESTIONS.filter(q => q.concurso === c.id);
    const saved = loadProgress(c.id);
    const progress = saved ? Math.round((saved.current / qs.length) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'concurso-card';
    card.innerHTML = `
      <div class="cc-icon">${c.icon}</div>
      <div class="cc-name">${c.name}</div>
      <div class="cc-org">${c.org}</div>
      <div class="cc-meta">
        <span class="cc-questions">${qs.length} questões</span>
        <span class="cc-badge-free">20 grátis</span>
      </div>
      <div class="cc-progress"><div class="cc-progress-fill" style="width:${progress}%"></div></div>
      ${saved ? `<div style="font-size:.65rem;color:var(--gold);margin-top:6px">↩ Continuar (Q${saved.current+1})</div>` : ''}
    `;
    card.addEventListener('click', () => startConcurso(c.id, saved));
    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────────────────
// INICIAR CONCURSO
// ─────────────────────────────────────────────────────────
function startConcurso(id, saved) {
  const meta = CONCURSOS.find(c => c.id === id);
  const qs = ALL_QUESTIONS.filter(q => q.concurso === id);

  st.concurso = id;
  st.questions = qs;
  st.answered = false;

  if (saved && saved.current > 0) {
    st.current = saved.current;
    st.correct = saved.correct;
    st.wrong   = saved.wrong;
  } else {
    st.current = 0;
    st.correct = 0;
    st.wrong   = 0;
  }

  $('quiz-concurso-name').textContent = meta.name;
  showScreen('screen-quiz');
  renderQuestion();
}

// ─────────────────────────────────────────────────────────
// RENDERIZAR QUESTÃO
// ─────────────────────────────────────────────────────────
function renderQuestion() {
  const q = st.questions[st.current];
  st.answered = false;

  // Verifica paywall
  if (st.current >= FREE_LIMIT) {
    showScreen('screen-paywall');
    return;
  }

  // Header
  $('quiz-q-counter').textContent = `${st.current+1}/${st.questions.length}`;
  const pct = (st.current / st.questions.length) * 100;
  $('quiz-progress-fill').style.width = pct + '%';

  // Placar
  $('qs-correct').textContent = st.correct;
  $('qs-wrong').textContent   = st.wrong;
  $('qs-score').textContent   = st.correct - st.wrong;

  // Questão
  $('q-num-tag').textContent     = `Q${pad(st.current+1)}`;
  $('q-subject-tag').textContent = q.subject;
  $('q-text').textContent        = q.text;

  // Botões
  const btnC = $('btn-certo');
  const btnE = $('btn-errado');
  btnC.className = 'btn-ans certo';
  btnE.className = 'btn-ans errado';
  btnC.disabled  = false;
  btnE.disabled  = false;

  // Feedback oculto
  $('feedback-panel').style.display = 'none';

  // Animação card
  const wrap = $('question-wrap');
  wrap.style.animation = 'none';
  void wrap.offsetWidth;
  wrap.style.animation = 'fadeUp .3s ease';

  saveProgress();
}

// ─────────────────────────────────────────────────────────
// PROCESSAR RESPOSTA
// ─────────────────────────────────────────────────────────
function processAnswer(userAns) {
  if (st.answered) return;
  st.answered = true;

  const q = st.questions[st.current];
  const correct = (userAns === q.answer);

  if (correct) st.correct++; else st.wrong++;

  $('qs-correct').textContent = st.correct;
  $('qs-wrong').textContent   = st.wrong;
  $('qs-score').textContent   = st.correct - st.wrong;

  // Estilizar botões
  const btnC = $('btn-certo');
  const btnE = $('btn-errado');
  btnC.disabled = btnE.disabled = true;

  if (userAns === true)  btnC.className = 'btn-ans certo '  + (correct ? 'selected-ok' : 'selected-bad');
  else                   btnE.className = 'btn-ans errado ' + (correct ? 'selected-ok' : 'selected-bad');

  // Feedback
  const verdict = $('fp-verdict');
  verdict.className = 'fp-verdict ' + (correct ? 'ok' : 'bad');
  $('fp-icon').textContent = correct ? '✓' : '✗';
  $('fp-text').textContent = correct ? 'Você acertou!' : 'Resposta incorreta';

  $('fp-tecnico-body').innerHTML = q.tecnico;
  $('fp-feynman-body').innerHTML = q.feynman;
  $('fp-macete-body').innerHTML  = q.macete;

  $('feedback-panel').style.display = 'block';

  // Botão próximo
  const isLast = st.current === st.questions.length - 1;
  $('btn-next').innerHTML = isLast
    ? `Ver Resultado <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`
    : `Próxima <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

  saveProgress();
}

// ─────────────────────────────────────────────────────────
// PRÓXIMA QUESTÃO
// ─────────────────────────────────────────────────────────
function nextQuestion() {
  if (st.current < st.questions.length - 1) {
    st.current++;
    if (st.current >= FREE_LIMIT) {
      showScreen('screen-paywall');
      return;
    }
    renderQuestion();
  } else {
    showResult();
  }
}

// ─────────────────────────────────────────────────────────
// RESULTADO
// ─────────────────────────────────────────────────────────
function showResult() {
  clearProgress();
  showScreen('screen-result');

  const total = Math.min(st.current + 1, FREE_LIMIT);
  const pct   = Math.round((st.correct / total) * 100);

  let trophy = '📋';
  if (pct >= 90) trophy = '🏆';
  else if (pct >= 70) trophy = '🥈';
  else if (pct >= 50) trophy = '📚';

  $('res-trophy').textContent   = trophy;
  $('res-title').textContent    = 'Simulado Concluído!';
  $('res-subtitle').textContent = `Concurso: ${CONCURSOS.find(c=>c.id===st.concurso)?.name} · ${total} questões respondidas`;
  $('rs-correct').textContent   = st.correct;
  $('rs-wrong').textContent     = st.wrong;
  $('rs-pct').textContent       = pct + '%';

  // Plano de desempenho por matéria
  const matMap = {};
  st.questions.slice(0, total).forEach((q, i) => {
    if (!matMap[q.subject]) matMap[q.subject] = { correct:0, total:0 };
    matMap[q.subject].total++;
  });
  // (recalcula acertos — usamos estado acumulado simplificado aqui)
  const plan = $('res-plan');
  plan.innerHTML = '<div class="plan-title">📊 PLANO DE DESEMPENHO</div>';

  Object.entries(matMap).forEach(([mat, data]) => {
    const item = document.createElement('div');
    item.className = 'plan-item';
    const pctMat = Math.round((st.correct / total) * 100); // simplificado
    let statusClass = 'plan-ok', statusTxt = '✅ Forte';
    if (pct < 70) { statusClass = 'plan-warn'; statusTxt = '⚠️ Revisar'; }
    if (pct < 50) { statusClass = 'plan-bad';  statusTxt = '❌ Urgente'; }
    item.innerHTML = `<span class="plan-mat">${mat}</span><span class="plan-status ${statusClass}">${statusTxt}</span>`;
    plan.appendChild(item);
  });

  // Relatório exportável
  const concursoName = CONCURSOS.find(c=>c.id===st.concurso)?.name;
  const report = generateReport(concursoName, total, pct);
  $('report-text').textContent = report;
}

function generateReport(concurso, total, pct) {
  const bar = '═'.repeat(40);
  const lines = [
    bar,
    '       APROVABRASIL — RELATÓRIO DE DESEMPENHO',
    bar,
    `Concurso  : ${concurso}`,
    `Data      : ${new Date().toLocaleDateString('pt-BR')}`,
    `Questões  : ${total} respondidas`,
    `Certas    : ${st.correct}`,
    `Erradas   : ${st.wrong}`,
    `Pontuação : ${st.correct - st.wrong} pts`,
    `Aproveit. : ${pct}%`,
    bar,
    pct >= 70 ? '✅ Desempenho acima da média de corte!' : pct >= 50 ? '⚠️  Continue estudando — você está no caminho!' : '❌ Foque nos pontos fracos e refaça o simulado.',
    bar,
    '🔓 Libere as 80 questões restantes por R$10:',
    'https://wa.me/5582996793347',
    bar,
  ];
  return lines.join('\n');
}

// ─────────────────────────────────────────────────────────
// NAVEGAÇÃO
// ─────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ─────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  startTimer();

  $('btn-certo').addEventListener('click',  () => processAnswer(true));
  $('btn-errado').addEventListener('click', () => processAnswer(false));
  $('btn-next').addEventListener('click',   () => nextQuestion());

  $('btn-back').addEventListener('click', () => {
    showScreen('screen-dashboard');
    renderDashboard();
  });

  $('pw-back').addEventListener('click', () => {
    showScreen('screen-dashboard');
    renderDashboard();
  });

  $('btn-restart').addEventListener('click', () => {
    clearProgress();
    startConcurso(st.concurso, null);
  });

  $('btn-copy').addEventListener('click', () => {
    const txt = $('report-text').textContent;
    navigator.clipboard.writeText(txt).then(() => {
      $('btn-copy').textContent = 'Copiado!';
      setTimeout(() => $('btn-copy').textContent = 'Copiar', 2000);
    });
  });

  // Teclado
  document.addEventListener('keydown', e => {
    if (!$('screen-quiz').classList.contains('active')) return;
    if ((e.key==='c'||e.key==='C') && !st.answered) processAnswer(true);
    if ((e.key==='e'||e.key==='E') && !st.answered) processAnswer(false);
    if ((e.key==='Enter'||e.key===' ') && st.answered) { e.preventDefault(); nextQuestion(); }
  });
});

export interface ZodiacSign {
  name: string;
  symbol: string;
  dateRange: string;
  dates: string; // short label
  element: 'Fogo' | 'Terra' | 'Ar' | 'Água';
  ruling: string;
  blocks: { area: string; title: string; body: string }[];
}

export const ZODIAC: ZodiacSign[] = [
  {
    name: 'Áries',
    symbol: '♈',
    dateRange: '21/03 — 19/04',
    dates: '21/03',
    element: 'Fogo',
    ruling: 'Marte',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio da iniciativa',
        body: 'Você sente que sempre precisa dar o primeiro passo — e quando não dá, o relacionamento esfria. O seu bloqueio é abrir mão do controle para deixar o outro chegar.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio do impulso',
        body: 'A pressa de colher antes de plantar faz o dinheiro entrar e sair no mesmo mês. Saturno pede paciência: o ouro que fica é o que foi cultivado, não o que foi corrido.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio da batalha',
        body: 'Você transforma descanso em culpa. O seu corpo carrega uma guerra que já acabou. A paz chega quando você permite que não precisa vencer tudo hoje.',
      },
    ],
  },
  {
    name: 'Touro',
    symbol: '♉',
    dateRange: '20/04 — 20/05',
    dates: '20/04',
    element: 'Terra',
    ruling: 'Vênus',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio do apego',
        body: 'Você confunde segurança com imobilidade. O amor estagna quando você segura demais. Liberar é o ritual que devolve o brilho ao vínculo.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio do acúmulo',
        body: 'O dinheiro entra, mas não circula. Vênus pede beleza e prazer — a fartura cresce quando você deixa a energia se mover, não só se guardar.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio da resistência',
        body: 'Mudar dói em você mais do que deveria. O corpo fica tenso segurando o que já quer partir. A paz nasce de soltar o que não serve mais.',
      },
    ],
  },
  {
    name: 'Gêmeos',
    symbol: '♊',
    dateRange: '21/05 — 20/06',
    dates: '21/05',
    element: 'Ar',
    ruling: 'Mercúrio',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio da dispersão',
        body: 'Você pensa em mil caminhos e o parceiro sente que não é escolhido. O bloqueio se dissolve quando você escolhe um — e se entrega a essa escolha.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio das ideias soltas',
        body: 'Você tem mais ideias do que foco. Mercúrio pede estrutura: o dinheiro chega quando uma ideia vira compromisso e o compromisso vira ação diária.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio do excesso de mente',
        body: 'Sua cabeça não desliga nem de noite. A paz pede silêncio: coloque o celular longe, respire devagar e deixe os pensamentos passarem sem respondê-los.',
      },
    ],
  },
  {
    name: 'Câncer',
    symbol: '♋',
    dateRange: '21/06 — 22/07',
    dates: '21/06',
    element: 'Água',
    ruling: 'Lua',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio do passado',
        body: 'Você compara todo amor com uma memória. A Lua pede que você limpe o coração das antigas marcas para o novo amor poder entrar de verdade.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio do medo de perder',
        body: 'Você segura o dinheiro por insegurança, mas ele precisa fluir. A fartura chega quando você confia na sua capacidade de reconstruir sempre.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio do abrigo',
        body: 'Você se esconde para não se machucar — mas se esconde também da vida. A paz vem quando você sai do casulo e deixa o mundo te tocar de novo.',
      },
    ],
  },
  {
    name: 'Leão',
    symbol: '♌',
    dateRange: '23/07 — 22/08',
    dates: '23/07',
    element: 'Fogo',
    ruling: 'Sol',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio do orgulho',
        body: 'Você espera ser admirado, mas esquece de ser vulnerável. O Sol pede coragem: o amor floresce quando você deixa o outro ver suas rachaduras.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio da aparência',
        body: 'Você gasta para parecer antes de ter. O Sol ilumina o que está por trás: a riqueza real nasce do que você constrói, não do que você mostra.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio do palco',
        body: 'Você não descansa porque tem sempre alguém observando. A paz chega quando você baixa as luzes e se permite ser comum, sem plateia, por um dia.',
      },
    ],
  },
  {
    name: 'Virgem',
    symbol: '♍',
    dateRange: '23/08 — 22/09',
    dates: '23/08',
    element: 'Terra',
    ruling: 'Mercúrio',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio da crítica',
        body: 'Você nota todos os defeitos do outro e esquece de ver a alma. Mercúrio pede delicadeza: o amor cresce onde a crítica dá lugar à aceitação.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio da perfeição',
        body: 'Você nunca lança nada porque nada está pronto. O dinheiro vem da versão imperfeita que você publica — ela é melhor do que a perfeita que fica na gaveta.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio do controle',
        body: 'Sua mente quer organizar tudo e todos. A paz nasce quando você aceita que algumas coisas precisam ficar bagunçadas para a vida acontecer.',
      },
    ],
  },
  {
    name: 'Libra',
    symbol: '♎',
    dateRange: '23/09 — 22/10',
    dates: '23/09',
    element: 'Ar',
    ruling: 'Vênus',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio da indecisão',
        body: 'Você tanto quer agradar que o outro não sente quem você é de verdade. Vênus pede escolha: o amor amadurece quando você diz o que quer, mesmo que desagrade.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio da harmonia',
        body: 'Você evita conversas difíceis sobre valor. O dinheiro cresce quando você cobra o que vale — a harmonia de verdade inclui o seu lado, não só o do outro.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio do espelho',
        body: 'Sua paz depende dos outros estarem bem. Vênus ensina: cuide de você primeiro, e o equilíbrio ao redor se ajusta sozinho.',
      },
    ],
  },
  {
    name: 'Escorpião',
    symbol: '♏',
    dateRange: '23/10 — 21/11',
    dates: '23/10',
    element: 'Água',
    ruling: 'Plutão',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio da desconfiança',
        body: 'Você testa antes de confiar e o amor vira provação. Plutão pede coragem: a entrega só chega quando você larga a armadura de quem já foi traído.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio do poder oculto',
        body: 'Você esconde seu valor para não incomodar. Plutão revela: o dinheiro cresce quando você assume o seu merecimento, sem pedir licença para brilhar.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio da sombra',
        body: 'Você carrega rancores antigos como tesouro. A paz chega quando você solta o que o outro fez — não por ele, mas para o seu corpo parar de doer.',
      },
    ],
  },
  {
    name: 'Sagitário',
    symbol: '♐',
    dateRange: '22/11 — 21/12',
    dates: '22/11',
    element: 'Fogo',
    ruling: 'Júpiter',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio da fuga',
        body: 'Quando o amor aperta, você viaja — fisicamente ou na cabeça. Júpiter pede presença: o relacionamento floresce quando você fica, mesmo desconfortável.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio do exagero',
        body: 'Você aposta grande e às vezes perde tudo. Júpiter pede medida: a fartura que dura vem do passo firme, não do salto no escuro.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio da busca',
        body: 'Você está sempre procurando a próxima resposta. A paz nasce quando você percebe que ela já está aqui — no lugar onde você decidiu parar de correr.',
      },
    ],
  },
  {
    name: 'Capricórnio',
    symbol: '♑',
    dateRange: '22/12 — 19/01',
    dates: '22/12',
    element: 'Terra',
    ruling: 'Saturno',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio do muro',
        body: 'Você protege tanto o coração que o amor não consegue entrar. Saturno pede que você abaixe uma fileira do muro — só o suficiente para o outro chegar.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio do merecimento',
        body: 'Você constrói muito e recebe pouco. Saturno ensina: cobrar o que vale não é ganância, é justiça — o dinheiro segue quem sabe honrar o próprio trabalho.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio do peso',
        body: 'Você carrega o mundo nos ombros. A paz chega quando você distribui o peso — nem tudo é sua responsabilidade, e soltar não é fraqueza, é sabedoria.',
      },
    ],
  },
  {
    name: 'Aquário',
    symbol: '♒',
    dateRange: '20/01 — 18/02',
    dates: '20/01',
    element: 'Ar',
    ruling: 'Urano',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio da distância',
        body: 'Você ama a humanidade toda e esquece da pessoa na sua frente. Urano pede aproximação: o vínculo floresce quando você deixa um só coração te mover.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio da originalidade solta',
        body: 'Suas ideias são à frente do tempo, mas faltam raízes. Urano pede estrutura: o dinheiro chega quando a genialidade encontra disciplina e prazo.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio da mente acelerada',
        body: 'Você pensa em tudo ao mesmo tempo e o corpo fica em segundo plano. A paz nasce quando você desce para o coração e respira — o futuro pode esperar.',
      },
    ],
  },
  {
    name: 'Peixes',
    symbol: '♓',
    dateRange: '19/02 — 20/03',
    dates: '19/02',
    element: 'Água',
    ruling: 'Netuno',
    blocks: [
      {
        area: 'Amor',
        title: 'O bloqueio da fusão',
        body: 'Você se dissolve no outro e perde seus limites. Netuno pede fronteiras: o amor de verdade nasce entre dois inteiros, não entre um e o vazio do outro.',
      },
      {
        area: 'Dinheiro',
        title: 'O bloqueio da neblina',
        body: 'Você não enxerga seus números com clareza. Netuno pede foco: a fartura chega quando você olha de frente para o quanto entra, o quanto sai e o quanto vale.',
      },
      {
        area: 'Paz',
        title: 'O bloqueio da fuga emocional',
        body: 'Você sente tudo de todos e se esgota. A paz nasce quando você reconhece o que é seu e o que não é — e devolve o que não pertence ao seu corpo.',
      },
    ],
  },
];

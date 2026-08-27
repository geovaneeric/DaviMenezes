/**
 * Fonte única dos pacotes e preços do DV Frame.
 */

const MAIN_PACKAGES = [
  {
    tier: "Básico",
    price: 200,
    plus: false,
    items: [
      "8 vídeos",
      "Edição",
      "2 revisões",
    ],
  },
  {
    tier: "Básico Plus",
    price: 300,
    plus: true,
    items: [
      "12 vídeos",
      "Edição",
      "2 revisões",
    ],
  },
  {
    tier: "Intermediário",
    price: 500,
    plus: false,
    items: [
      "20 vídeos",
      "Edição",
      "3 revisões",
    ],
  },
  {
    tier: "Mais opções sob consulta",
    cta: true,
    desc: "Precisa de um pacote maior, mais dias de gravação ou algo fora do padrão? Vamos conversar e montar sob medida.",
    ctaLabel: "Falar no WhatsApp",
    ctaHref: "https://wa.me/5575999570673",
  },
];
  ];

const SHORT_PACKAGES = [
  {
    tier: "Básico",
    price: 250,
    items: [
      "10 vídeos curtos",
      "Edição",
      "2 revisões",
    ],
  },
  {
    tier: "Intermediário",
    price: 400,
    items: [
      "16 vídeos curtos",
      "Edição",
      "2 revisões",
    ],
  },
  {
    tier: "Adicione",
    price: 50,
    items: ["Vídeos extras de 30s nos pacotes principais"],
  },
];

const EXTRA_SERVICES = [
  {
    label: "Revisões extras",
    price: "R$ 50",
    desc: "Alterações após as revisões já inclusas no pacote.",
  },
  {
    label: "Edição expressa",
    price: "+20% do pacote",
    desc: "Entrega prioritária, com redução de prazo em até 50%.",
  },
];

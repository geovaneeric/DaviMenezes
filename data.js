/**
 * Fonte única dos pacotes e preços do DV Frame.
 */

const MAIN_PACKAGES = [
  {
    tier: "Básico",
    price: 200,
    plus: false,
    items: [
      "1 vídeo curto",
      "Edição",
      "2 revisões",
    ],
  },
  {
    tier: "Básico Plus",
    price: 300,
    plus: true,
    items: [
      "2 vídeos curtos",
      "Edição",
      "2 revisões",
    ],
  },
  {
    tier: "Intermediário",
    price: 500,
    plus: false,
    items: [
      "1 vídeo principal",
      "2 vídeos curtos",
      "Edição intermediária",
      "3 revisões",
    ],
  },
  {
    tier: "Intermediário Plus",
    price: 750,
    plus: true,
    items: [
      "1 vídeo principal",
      "4 vídeos curtos",
      "Edição intermediária (legendas e transições)",
      "3 revisões",
    ],
  },
  ];

const SHORT_PACKAGES = [
  {
    tier: "Básico",
    price: 250,
    items: [
      "3 vídeos curtos",
      "Edição",
      "2 revisões",
    ],
  },
  {
    tier: "Intermediário",
    price: 400,
    items: [
      "5 vídeos curtos",
      "Edição intermediária",
      "2 revisões",
    ],
  },
  {
    tier: "Avançado",
    price: 800,
    items: [
      "10 vídeos curtos",
      "Edição avançada",
      "Transições personalizadas",
      "3 revisões",
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
    desc: "Alterações após as duas revisões já inclusas no pacote.",
  },
  {
    label: "Edição expressa",
    price: "+20% do pacote",
    desc: "Entrega prioritária, com redução de prazo em até 50%.",
  },
];

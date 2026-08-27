/**
 * data.js
 * Fonte única dos pacotes e preços do DV Frame.
 * Para atualizar valores ou descrições, edite apenas este arquivo —
 * o HTML é gerado automaticamente a partir daqui (ver packages.js).
 */

const MAIN_PACKAGES = [
  {
    tier: "Básico",
    price: 200,
    plus: false,
    items: [
      "1 vídeo curto (até 1 min)",
      "Edição básica",
      "Música de fundo",
    ],
  },
  {
    tier: "Básico Plus",
    price: 300,
    plus: true,
    items: [
      "2 vídeos curtos (até 1 min cada)",
      "Edição básica",
      "Música de fundo",
    ],
  },
  {
    tier: "Intermediário",
    price: 500,
    plus: false,
    items: [
      "1 vídeo principal (até 3 min)",
      "2 vídeos curtos (até 1 min cada)",
      "Edição intermediária",
    ],
  },
  {
    tier: "Intermediário Plus",
    price: 750,
    plus: true,
    items: [
      "1 vídeo principal (até 3 min)",
      "4 vídeos curtos (até 1 min cada)",
      "Edição intermediária (legendas e transições)",
    ],
  },
  {
    tier: "Avançado",
    price: 1200,
    plus: false,
    items: [
      "1 vídeo principal (até 5 min)",
      "5 vídeos curtos (até 1 min cada)",
      "Edição avançada",
      "Fotos de bastidores (até 10 imagens editadas)",
    ],
  },
  {
    tier: "Avançado Plus",
    price: 1500,
    plus: true,
    items: [
      "2 vídeos principais (até 5 min cada)",
      "6 vídeos curtos (até 1 min cada)",
      "Edição avançada",
      "Fotos de bastidores (até 15 imagens editadas)",
    ],
  },
];

const SHORT_PACKAGES = [
  {
    tier: "Básico",
    price: 250,
    items: [
      "3 vídeos curtos (até 30s cada)",
      "Edição básica",
      "Música de fundo",
    ],
  },
  {
    tier: "Intermediário",
    price: 400,
    items: [
      "5 vídeos curtos (até 30s cada)",
      "Edição intermediária (legendas básicas)",
    ],
  },
  {
    tier: "Avançado",
    price: 800,
    items: [
      "10 vídeos curtos (até 30s cada)",
      "Edição avançada",
      "Transições personalizadas",
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
  {
    label: "Legendagem completa",
    price: "R$ 100 / vídeo",
    desc: "Inserção manual de legendas em todos os vídeos.",
  },
];

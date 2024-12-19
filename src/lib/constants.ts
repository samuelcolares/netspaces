import mePoupeBadge from "@/public/mePoupeBadge.png";
import netspacesBadge from "@/public/netspacesBadge.png";
import info1 from "@/public/info1.png";
import info2 from "@/public/info2.png";
import info3 from "@/public/info3.png";

export const HeroSectionTexts = {
  header: "A primeira assinatura de patrimônio imobiliário",
  desc: "Acumule frações de imóveis reais mensalmente e veja seu patrimônio crescer. Aproveite os descontos exclusivos de lançamento com planos de R$ 5,90 até R$ 1999,00.",
  button: "Reservar meu lugar na fila",
  altImg: "Imagem de apresentação, celulares mostrando "
};

export const OfferSectionTexts = {
  subHeader: "Exclusivo no lançamento",
  header: "Até 35% Off na compra do primeiro imóvel*",
  desc: "Reserve sua assinatura antes do lançamento e todas as frações do primeiro imóvel, adquiridas mensalmente, serão compradas por um valor muito abaixo do valor de mercado. O bom negócio imobiliário se faz na compra, e a gente sabe disso.",
  info: "* os descontos são limitados às reservas de planos de R$ 49,00 ou mais, e até que se esgotem as frações do primeiro imóvel deste plano de assinatura.",
  offer: {
    from: "De: R$ 250.000,00",
    to: "Por: ",
    toHighlight: "R$ 162.500,00",
  },
  benefit1: {
    badgeSrc: netspacesBadge.src,
    discount: "15% Off",
    desc: "Para os 10.000 primeiros a reservar",
  },
  benefit2: {
    badgeSrc: mePoupeBadge.src,
    discount: "+ 20% Off",
    desc: "Para clientes do movimento ",
    descHighlight: "Me Poupe! Felizes 20.23",
  },
};

export const DiscoverSectionTexts = {
  subHeader: "Descubra o poder do grupo!",
  header:
    "Milhares de assinantes, juntos, compram imóveis à vista com preços melhores.",
  infoCard1: {
    imgSrc: info1.src,
    header: "Juntos, mais fortes.",
    desc: "Somando o dinheiro de milhares de assinantes, todos os meses o grupo ganha o poder de pagar à vista por novos imóveis, o que permite negociar melhor o valor e aproveitar oportunidades.",
  },
  infoCard2: {
    imgSrc: info2.src,
    header: "Os melhores imóveis, seus.",
    desc: "Experts do mercado imobiliário estão atentos às oportunidades de compra em todo o Brasil e escolhem as melhores administradoras de imóveis para cuidar das locações e do bem.",
  },
  infoCard3: {
    imgSrc: info3.src,
    header: "Hiper diluição de risco.",
    desc: "Os riscos de vacância ou inadimplência, típicos de imóveis, são diluídos, pois você será dono de apenas uma fração de cada imóvel e o aluguel dos seus outros imóveis pode cobrir os custos.",
  },
};

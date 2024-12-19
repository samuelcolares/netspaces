"use client";
import * as React from "react";

// comp
import { BuildingCard, BuildingCardProps } from "./building-card";

// hooks
import { useState } from "react";

// utils
import { cn } from "@/src/lib/utils";
import building1 from "@/public/building1.jpeg";
import building2 from "@/public/building2.png";

const building1Info: BuildingCardProps["info"] = {
  "Tipo/Área": "Residencial. 45m²",
  "Valor total": "R$ 250.000,00",
  Aluguel: "R$ 1.021,00",
  Retorno: "0.69% a.m.",
  Bairro: "Petrópolis",
  "Cidade/UF": "Porto Alegre, RS",
};

const building2Info: BuildingCardProps["info"] = {
  "Tipo/Área": "Comercial. 112m²",
  "Valor total": "R$ 550.000,00",
  Aluguel: "R$ 3.217,00",
  Retorno: "0.84% a.m.",
  Bairro: "Edson Queiroz",
  "Cidade/UF": "Fortaleza, CE",
};

export const BuildingCardsWrapper = () => {
  const [cardVisible, setCardVisible] = useState<{
    card1: boolean;
    card2: boolean;
  }>({
    card1: true,
    card2: false,
  });

  const invertCards = () => {
    setCardVisible((prev) => {
      return {
        card1: !prev.card1,
        card2: !prev.card2,
      };
    });
  };

  return (
    <div
      className="relative lg:w-[315px] lg:h-[420px] w-[180.15px] h-[253.66px] max-[1400px]:order-last"
      onClick={invertCards}
    >
      <BuildingCard
        buildingImg={building1.src}
        address="Rua dos Andradas 1234, sala 1624"
        highlightText1="+3000"
        highlightText2="Proprietários"
        hilightBadgeColor="#071D49"
        info={building1Info}
        className={cn(
          "transition-all absolute top-0 left-0 z-10",
          cardVisible.card2 && "scale-[.8]"
        )}
      />
      <BuildingCard
        buildingImg={building2.src}
        address="Av. Washington Soares, 909"
        highlightText1="Próximo"
        hilightBadgeColor="#ffffff"
        info={building2Info}
        className={cn(
          "transition-all absolute top-2 left-14 lg:left-28 scale-[.8]",
          cardVisible.card2 && "scale-[1] z-20"
        )}
      />
    </div>
  );
};

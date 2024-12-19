import * as React from "react";

// comp
import Text from "@/components/ui/text";
import HomeIcon from "@/components/ui/icons/home";
import MoneyIcon from "@/components/ui/icons/money";
import CodeBarIcon from "@/components/ui/icons/codebar";
import PercentIcon from "@/components/ui/icons/percent";
import MapPinIcon from "@/components/ui/icons/map-pin";
import FlagIcon from "@/components/ui/icons/flag";

export interface CardListItemProps {
  label:
    | "Tipo/Área"
    | "Valor total"
    | "Aluguel"
    | "Retorno"
    | "Bairro"
    | "Cidade/UF";
  text: string;
}

export const CardListItem: React.FC<CardListItemProps> = ({ label, text }) => {
  const iconCollection = new Map();
  iconCollection.set("Tipo/Área", HomeIcon);
  iconCollection.set("Valor total", MoneyIcon);
  iconCollection.set("Aluguel", CodeBarIcon);
  iconCollection.set("Retorno", PercentIcon);
  iconCollection.set("Bairro", MapPinIcon);
  iconCollection.set("Cidade/UF", FlagIcon);
  const Icon = iconCollection.get(label);

  return (
    <li className="flex">
      <div className="lg:w-28 w-16 gap-2 flex items-center">
        <div className="lg:w-[12px] w-[7px]">
          <Icon />
        </div>
        <Text variant={"item"} size={"md"}>
          {label}
        </Text>
      </div>

      <Text variant={"item"}>{text}</Text>
    </li>
  );
};

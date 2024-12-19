import * as React from 'react'

// comp
import Text from "@/components/ui/text";
import Image from "next/image";
import Header from "@/components/ui/header";
import Divider from "@/components/ui/divider";
import PlusIcon from "@/components/ui/icons/plus";
import StarIcon from "@/components/ui/icons/star";
import { CardListItem, CardListItemProps } from "./building-card-item";

// hooks
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

// utils
import { cn } from "@/src/lib/utils";


const desktop = "(min-width: 768px)";

export interface BuildingCardProps {
  buildingImg: string;
  address: string;
  info: {
    "Tipo/Área": string;
    "Valor total": string;
    Aluguel: string;
    Retorno: string;
    Bairro: string;
    "Cidade/UF": string;
  };
  highlightText1: string;
  highlightText2?: string;
  hilightBadgeColor?: "#071D49" | "#ffffff";
  className?: string;
}

export const BuildingCard: React.FC<BuildingCardProps> = ({
  className,
  buildingImg,
  address,
  hilightBadgeColor = "#071D49",
  info,
  highlightText1,
  highlightText2,
}) => {
  const isDesktop = useMediaQuery(desktop);
  return (
    <div
      className={cn(
        "lg:w-[315px] lg:h-[420px] w-[180.15px] h-[253.66px] rounded-lg border shadow-lg lg:p-[10px] p-[6px] bg-[#f5f5f5] relative max-lg:rounded-[4.94px]",
        className
      )}
    >
      <div className="h-full w-full rounded-[4px] max-lg:rounded-[2.44px] bg-white overflow-hidden relative">
        <Image
          alt=""
          src={buildingImg}
          width={isDesktop ? 295 : 180.15}
          height={isDesktop ? 162 : 98.93}
          className="object-cover"
        />
        <div className="lg:p-3 p-[7px]">
          <Header
            size={"bold"}
            variant={"card"}
            className="lg:w-[195px] w-[119.98px] lg:h-[68px] h-[40.85px] center"
          >
            {address}
          </Header>
          <Divider className="my-2" />

          <ul className="">
            {(Object.keys(info) as Array<keyof typeof info>).map(
              (item, index) => (
                <CardListItem
                  key={index}
                  label={item as CardListItemProps["label"]}
                  text={info[item]}
                />
              )
            )}
          </ul>

          <div className="absolute right-0 bottom-0 w-0 h-0 lg:border-b-[40px] lg:border-l-[40px] border-b-[20px] border-l-[20px] border-r-[0px] border-b-[#f5f5f5] border-l-transparent border-r-transparent" />
          <div className="absolute right-0 bottom-0">
            <PlusIcon className="lg:w-4 lg:h-4 w-2 h-2" />
          </div>
        </div>
      </div>

      <div className="lg:w-[100px] lg:h-[100px] w-[61px] h-[61px] absolute lg:-top-8 lg:-right-8 -top-4 -right-4 drop-shadow-lg">
        <StarIcon
          className="lg:w-[100px] lg:h-[100px] w-[61px] h-[61px]"
          fillColor={hilightBadgeColor}
        />
        <div className="absolute inset-0 center flex flex-col -mt-1">
          {!isDesktop && highlightText2 && (
            <Text className="text-white font-extrabold center !text-[7.33px] max-lg:leading-[10.99px]">
              MAIS DE
            </Text>
          )}
          <Text
            className={cn(
              "text-white lg:text-[20px] text-[12px] max-lg:leading-[13.44px] font-bold w-[83px] center",
              hilightBadgeColor === "#ffffff" && "text-primary"
            )}
          >
            {highlightText1}
          </Text>
          {highlightText2 && (
            <Text className="text-white font-extrabold center lg:text-xs lg:-mt-1 !text-[7.33px] max-lg:leading-[10.99px]">
              {isDesktop ? highlightText2 : "DONOS"}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

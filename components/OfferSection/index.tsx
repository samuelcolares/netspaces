import * as React from "react";

// comp
import Header from "../ui/header";
import Text from "../ui/text";
import { Benefits } from "./Benefits";
import { BuildingCardsWrapper } from "./BuildingCards";

// utils
import { OfferSectionTexts } from "@/src/lib/constants";

const OfferSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-[90px] flex lg:gap-60 justify-center max-lg:px-8 max-lg:py-14 max-lg:flex-col gap-9 max-lg:items-center">
      <BuildingCardsWrapper />

      <div className="max-w-[589px] lg:mr-32">
        <Header header="h3" variant={"highlight"}>
          {OfferSectionTexts.subHeader}
        </Header>
        <Header
          className="lg:mt-4 mt-3 lg:mb-[31px] mb-6"
          variant={"secondary"}
        >
          {OfferSectionTexts.header}
        </Header>
        <Text className="lg:pb-[45px] pb-[52px]">{OfferSectionTexts.desc}</Text>

        <Benefits />

        <Text variant={"span"} className="mt-4">
          {OfferSectionTexts.info}
        </Text>
      </div>
    </section>
  );
};

export default OfferSection;

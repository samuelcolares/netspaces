import React from "react";

// comp
import { InfoCard } from "./InfoCard";
import Header from "../ui/header";

// utils
import { DiscoverSectionTexts } from "@/src/lib/constants";

const InfoCardArray = [
  DiscoverSectionTexts.infoCard1,
  DiscoverSectionTexts.infoCard2,
  DiscoverSectionTexts.infoCard3,
];

const DiscoverSection = () => {
  return (
    <section className="lg:px-32 lg:py-[106px] px-8 py-14">
      <Header variant={"highlight"} header="h3">
        {DiscoverSectionTexts.subHeader}
      </Header>
      <Header
        className="lg:mt-4 mt-3 mb-20 max-w-[792px]"
        variant={"secondary"}
      >
        {DiscoverSectionTexts.header}
      </Header>

      <div className="flex gap-14 min-[1500px]:justify-center max-lg:justify-center flex-wrap">
        {InfoCardArray.map((info) => (
          <InfoCard
            key={info.header}
            header={info.header}
            desc={info.desc}
            imgSrc={info.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;

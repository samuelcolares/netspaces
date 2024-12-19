import * as React from "react";

// comp
import Header from "@/components/ui/header";
import Text from "@/components/ui/text";
import Image from "next/image";

interface InfoCardProps {
  imgSrc: string;
  header: string;
  desc: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ desc, header, imgSrc }) => {
  return (
    <div className="max-w-[345px]">
      <Image src={imgSrc} alt={header} width={260.31} height={133.6} />
      <Header
        variant={"secondary"}
        className="text-2xl leading-[27.6px] mb-4 mt-8"
      >
        {header}
      </Header>
      <Text>{desc}</Text>
    </div>
  );
};

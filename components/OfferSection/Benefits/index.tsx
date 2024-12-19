"use client";
import * as React from "react"

// comp
import Divider from "@/components/ui/divider";
import Text from "@/components/ui/text";
import Image from "next/image";

// hooks
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

//utils
import { cn } from "@/src/lib/utils";
import { OfferSectionTexts } from "@/src/lib/constants";
import Woman from "@/public/woman.png";

const desktop = "(min-width: 768px)";

export const Benefits = () => {
  const isDesktop = useMediaQuery(desktop);
  return (
    <div className="space-y-4 relative">
      <Offer />
      <Divider />
      <BenefitBadge
        src={OfferSectionTexts.benefit1.badgeSrc}
        imgAlt="Benefício 1"
        desc={OfferSectionTexts.benefit1.desc}
        discount={OfferSectionTexts.benefit1.discount}
      />
      <BenefitBadge
        src={OfferSectionTexts.benefit2.badgeSrc}
        imgAlt="Benefício 2"
        desc={OfferSectionTexts.benefit2.desc}
        discount={OfferSectionTexts.benefit2.discount}
        highlightText={OfferSectionTexts.benefit2.descHighlight}
      />
      <Divider />
      <Image
        src={Woman.src}
        alt="Mulher em pose reflexiva"
        width={isDesktop ? 98 : 71}
        height={isDesktop ? 127 : 92}
        className="absolute bottom-0 lg:right-6 right-0"
      />
    </div>
  );
};

const Offer = () => {
  return (
    <div className="flex sm:gap-4 max-sm:justify-between mb-4">
      <Text variant={"offer"}>{OfferSectionTexts.offer.from}</Text>
      <Text variant={"offerHighlight"}>
        {OfferSectionTexts.offer.to}
        <Text span variant={"offerHighlight"} className="font-bold">
          {OfferSectionTexts.offer.toHighlight}
        </Text>
      </Text>
    </div>
  );
};

interface BenefitBadgeProps {
  src: string;
  imgAlt: string;
  discount: string;
  desc: string;
  descClassName?: string;
  highlightText?: string;
}

const BenefitBadge: React.FC<BenefitBadgeProps> = ({
  desc,
  discount,
  imgAlt,
  src,
  descClassName,
  highlightText,
}) => {
  const isDesktop = useMediaQuery(desktop);
  return (
    <div className="flex gap-[10px]">
      <Image
        src={src}
        alt={imgAlt}
        width={isDesktop ? 50 : 42}
        height={isDesktop ? 50 : 42}
        className="max-w-[42px] max-h-[42px] lg:max-w-[50px] lg:max-h-[50px] object-contain"
      />
      <div>
        <Text variant={"discount"}>{discount}</Text>
        <Text className={cn('max-lg:grid',descClassName)}>
          {desc}
          {highlightText && (
            <Text span className="text-[#891fd3] font-bold">
              {highlightText}
            </Text>
          )}
        </Text>
      </div>
    </div>
  );
};

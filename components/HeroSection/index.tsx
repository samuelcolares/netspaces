"use client";

import React from "react";

// comp
import Header from "../ui/header";
import Text from "../ui/text";
import { Button } from "../ui/button";
import NetspacesLogoImg from "../ui/icons/netspace";

// hooks
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

// utils
import { HeroSectionTexts } from "@/src/lib/constants";
import { Shape } from "./shape";
import toast from "react-hot-toast";
import { fakePromise } from "@/src/lib/utils";

const desktop = "(min-width: 1024px)";

const HeroSection = () => {
  const isDesktop = useMediaQuery(desktop);

  const awaitList = async () => {
    await toast.promise(fakePromise(), {
      error: "Erro",
      loading: "Estamos reservando o seu lugar na fila!",
      success: "Seu lugar na fila foi reservado! 🎉🎉",
    });
  };

  return (
    <section className="overflow-hidden relative max-lg:px-8">
      <div className="lg:space-y-10 lg:my-28 my-16 lg:max-w-[589px] lg:ml-[121px]">
        <NetspacesLogoImg />
        <Header className="max-lg:mt-[50px]">{HeroSectionTexts.header}</Header>
        <div className="mt-6 mb-10 relative">
          <Text variant={"hero"} className="max-lg:max-w-[167px]">
            {HeroSectionTexts.desc}
          </Text>
          {!isDesktop && <Shape />}
        </div>
        <Button onClick={awaitList}>{HeroSectionTexts.button}</Button>
      </div>
      {isDesktop && <Shape />}
    </section>
  );
};

export default HeroSection;

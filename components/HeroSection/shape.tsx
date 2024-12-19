import * as React from "react";

// comp
import Image from "next/image";

// utils
import phones from "@/public/phones.png";

export const Shape = () => {
  return (
    <div className="absolute right-0 top-0 bottom-0 lg:w-[797.62px] w-[170px] h-[170px] animate-fadeIn opacity-0">
      <div
        className="absolute inset-0 lg:rounded-[147.8px] rounded-[40px] lg:w-[797.62px] lg:h-[797.62px] -rotate-45 lg:-translate-y-16 min-[1500px]:translate-x-44 lg:translate-x-96 translate-x-14 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsla(243, 48%, 68%, 1) 13%, hsla(218, 83%, 68%, 1) 30%, hsla(211, 95%, 68%, 1) 44%, hsla(201, 97%, 70%, 1) 80%, hsla(207, 95%, 71%, 1) 100%)",
        }}
      >
        <div className="animate-bounce-slow lg:h-[797.62px] max-lg:w-[200px] max-lg:h-[200px] opacity-0 relative">
          <Image
            src={phones.src}
            alt="Imagem de apresentação"
            fill
            className="rotate-45 lg:-translate-y-10 max-lg:-translate-x-3"
          />
        </div>
      </div>
    </div>
  );
};

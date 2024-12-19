"use client";
import * as React from "react";

import { manrope } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headerVariants = cva("text-primary", {
  variants: {
    variant: {
      default: "text-[38px] lg:text-5xl lg:leading-[52.8px] leading-[41.8px]",
      secondary: "text-2xl lg:text-4xl lg:leading-[43.2px]",
      highlight: "lg:text-[26px] text-highlight lg:leading-8 leading-[19.2px]",
      card: "lg:text-[20px] text-[12.21px] lg:leading-[22px] leading-[13.44px]"
    },
    size: {
      default: "font-extrabold",
      bold: "font-bold"
    },
    font: {
      manrope: manrope.className,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface HeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headerVariants> {
  className?: string;
  header?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Header = React.forwardRef<HTMLHeadingElement, HeaderProps>(
  (
    { header = "h2", className, font, variant, size, onClick, ...props },
    ref
  ) => {
    const Comp = header;
    return (
      <Comp
        className={cn(headerVariants({ variant, font, size, className }))}
        ref={ref}
        {...props}
        onClick={(e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
          if (onClick) onClick(e);
        }}
      >
        {props.children}
      </Comp>
    );
  }
);

Header.displayName = "Header";

export default Header;

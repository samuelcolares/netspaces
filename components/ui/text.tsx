"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";
import { roboto } from "@/src/lib/fonts";

const textVariants = cva("text-primary", {
  variants: {
    variant: {
      default: "text-base max-lg:text-sm",
      hero: "lg:text-2xlmax-lg:leading-[22.4px]",
      offer: "text-[18px] leading-[19.8px]",
      offerHighlight: "text-[18px] leading-[19.8px] text-highlight",
      span: "text-xs leading-[17.4px] text-tertiary",
      discount:
        "lg:text-[18px] lg:leading-[21.6px] text-base leading-[19.2px] !font-bold",
      item: "lg:text-sm text-[8.55px]",
    },
    size: {
      default: "font-light",
      md: "font-medium",
    },
    font: {
      roboto: roboto.className,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  className?: string;
  span?: boolean;
}

const Text = React.forwardRef<HTMLHeadingElement, TextProps>(
  (
    { span = false, className, font, variant, size, onClick, ...props },
    ref
  ) => {
    const Comp = span ? "span" : "p";
    return (
      <Comp
        className={cn(textVariants({ variant, font, size, className }))}
        ref={ref}
        {...props}
        onClick={(
          e: React.MouseEvent<
            HTMLSpanElement | HTMLParagraphElement,
            MouseEvent
          >
        ) => {
          if (onClick) onClick(e);
        }}
      >
        {props.children}
      </Comp>
    );
  }
);

Text.displayName = "Text";

export default Text;

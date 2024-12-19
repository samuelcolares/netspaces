"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils";
import { roboto } from "@/src/lib/fonts";

const buttonVariants = cva(
  "text-lg font-bold text-white rounded-md bg-buttonPrimary",
  {
    variants: {
      variant: {
        default:
          "relative z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-white/30 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%]",
      },
      size: {
        default: "px-8 py-3",
      },
      font: {
        roboto: roboto.className,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      font: "roboto",
    },
  }
);

interface IconProps {
  Icon: React.ElementType;
  iconPlacement: "left" | "right";
}

interface IconRefProps {
  Icon?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export type ButtonIconProps = IconProps | IconRefProps;

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonIconProps
>(({ className, variant, size, font, onClick, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, font, className }))}
      ref={ref}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick) onClick(e);
      }}
      {...props}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };

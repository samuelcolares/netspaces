import { cn } from "@/src/lib/utils";
import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => (
  <div className={cn("border border-divider", className)} />
);

export default Divider;

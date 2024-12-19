import * as React from "react";

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 11 11"
      className={className}
    >
      <path
        fill="#558EFF"
        d="M6.436 10.03V6.224h3.784v-2.31H6.436V.13h-2.31v3.784H.32v2.31h3.806v3.806z"
      />
    </svg>
  );
};

PlusIcon.displayName = "Svg";

export default PlusIcon;

import * as React from "react";

const HomeIcon: React.FC<{ className?: string }> = ({ className }) => {
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
        fill="#FF3E7D"
        fillRule="evenodd"
        d="M10.53 4.519a1 1 0 0 0-.094-.107L6.396.372a1.267 1.267 0 0 0-1.793 0L.563 4.41a1 1 0 0 0-.095.107A1.46 1.46 0 0 0 0 5.589v3.946C0 10.344.657 11 1.465 11h1.678V7.071a.785.785 0 1 1 1.571 0V11h4.821C10.344 11 11 10.344 11 9.535V5.59c0-.424-.182-.805-.468-1.072z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default HomeIcon;

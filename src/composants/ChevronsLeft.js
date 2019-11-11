import React from "react";
const ChevronsLeft = ({ size = 23, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
  </svg>
);
export default ChevronsLeft;

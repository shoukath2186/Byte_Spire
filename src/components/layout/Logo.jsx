import React from "react";

/**
 * Minimalist Stacked Nodes forming a Spire (ByteSpire brand mark)
 * Primary node: #8e2157
 * Accent node: #99a1af
 */
export function LogoIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Minimalist Stacked Nodes forming a Spire */}
      <g transform="translate(8, 8)">
        <rect
          x="0"
          y="15"
          width="24"
          height="24"
          rx="6"
          transform="rotate(45 12 27)"
          fill="#8e2157"
        />
        <rect
          x="25"
          y="0"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 33 8)"
          fill="#99a1af"
        />
      </g>
    </svg>
  );
}

export default LogoIcon;

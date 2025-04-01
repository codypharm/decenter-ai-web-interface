import React from 'react'

export const Globe2 = () => {
  return (
    <svg
      width="463"
      height="733"
      viewBox="0 0 463 733"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1">
        <mask
          id="mask0_1580_872"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="107"
          y="107"
          width="519"
          height="519"
        >
          <circle
            cx="366.281"
            cy="366.719"
            r="259"
            transform="rotate(-135 366.281 366.719)"
            fill="url(#paint0_linear_1580_872)"
          />
        </mask>
        <g mask="url(#mask0_1580_872)">
          <g filter="url(#filter0_i_1580_872)">
            <circle
              cx="366.281"
              cy="366.719"
              r="259"
              transform="rotate(-135 366.281 366.719)"
              fill="url(#paint1_linear_1580_872)"
            />
          </g>
          <g filter="url(#filter1_f_1580_872)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.4743 297.14C142.789 271.048 203.079 284.2 266.396 347.516C450.149 508.01 468.362 582.923 428.541 645.454C514.543 650.807 598.889 623.085 660.839 561.135C783.659 438.315 771.945 227.471 634.676 90.2017C497.407 -47.0676 286.563 -58.7812 163.743 64.0387C101.6 126.182 73.8978 210.86 79.4743 297.14Z"
              fill="black"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1580_872"
          x="107.281"
          y="103.857"
          width="518"
          height="521.862"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.41379"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_1580_872"
          />
          <feOffset dy="-3.86207" />
          <feGaussianBlur stdDeviation="4.34483" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1580_872" />
        </filter>
        <filter
          id="filter1_f_1580_872"
          x="9.73969"
          y="-89.9644"
          width="805.102"
          height="805.102"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="34.5172"
            result="effect1_foregroundBlur_1580_872"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1580_872"
          x1="336.298"
          y1="202.77"
          x2="366.281"
          y2="707.374"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1580_872"
          x1="336.298"
          y1="202.77"
          x2="366.281"
          y2="707.374"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}

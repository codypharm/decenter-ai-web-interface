import React from 'react'

export const Globe1 = () => {
  return (
    <svg
      width="378"
      height="378"
      viewBox="0 0 378 378"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <mask
          id="mask0_1580_865"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="34"
          y="34"
          width="309"
          height="309"
        >
          <circle
            cx="188.765"
            cy="188.765"
            r="154.126"
            transform="rotate(15 188.765 188.765)"
            fill="url(#paint0_linear_1580_865)"
          />
        </mask>
        <g mask="url(#mask0_1580_865)">
          <g filter="url(#filter0_i_1580_865)">
            <circle
              cx="188.765"
              cy="188.765"
              r="154.126"
              transform="rotate(15 188.765 188.765)"
              fill="url(#paint1_linear_1580_865)"
            />
          </g>
          <g filter="url(#filter1_f_1580_865)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M357.274 139.286C332.408 171.571 297.424 182.732 245.955 168.941C103.503 140.904 71.8274 107.716 73.7439 63.6418C27.8295 86.4722 -7.38952 125.855 -20.8831 176.214C-47.635 276.054 21.1361 381.228 132.721 411.127C244.307 441.026 356.451 384.328 383.203 284.489C396.739 233.973 385.82 182.091 357.274 139.286Z"
              fill="black"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1580_865"
          x="34.6007"
          y="30.7386"
          width="308.328"
          height="312.19"
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
            result="effect1_innerShadow_1580_865"
          />
          <feOffset dy="-3.86207" />
          <feGaussianBlur stdDeviation="4.34483" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1580_865" />
        </filter>
        <filter
          id="filter1_f_1580_865"
          x="-95.6905"
          y="-5.39263"
          width="553.701"
          height="493.536"
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
            result="effect1_foregroundBlur_1580_865"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1580_865"
          x1="170.922"
          y1="91.2023"
          x2="188.765"
          y2="391.482"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1580_865"
          x1="170.922"
          y1="91.2023"
          x2="188.765"
          y2="391.482"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}

import React from 'react'

export const Globe4 = () => {
  return (
    <svg
      width="148"
      height="148"
      viewBox="0 0 148 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1">
        <mask
          id="mask0_1580_858"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="148"
          height="148"
        >
          <circle cx="74" cy="74" r="74" fill="url(#paint0_linear_1580_858)" />
        </mask>
        <g mask="url(#mask0_1580_858)">
          <g filter="url(#filter0_i_1580_858)">
            <circle cx="74" cy="74" r="74" fill="url(#paint1_linear_1580_858)" />
          </g>
          <g filter="url(#filter1_f_1580_858)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M151.751 35.6048C148.695 70.3808 133.954 89.128 98.0589 89.128C1.85555 95.6282 2.7268 71.2186 4.04653 34.2442C4.0834 33.2114 4.12061 32.1687 4.15607 31.1167C-13.7411 47.343 -24.7881 69.6329 -24.7881 94.2313C-24.7881 143.858 20.1753 184.089 75.6405 184.089C131.106 184.089 176.069 143.858 176.069 94.2313C176.069 71.8289 166.906 51.3413 151.751 35.6048Z"
              fill="black"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1580_858"
          x="0"
          y="-3.86207"
          width="148"
          height="151.862"
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
            result="effect1_innerShadow_1580_858"
          />
          <feOffset dy="-3.86207" />
          <feGaussianBlur stdDeviation="4.34483" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1580_858" />
        </filter>
        <filter
          id="filter1_f_1580_858"
          x="-93.8226"
          y="-37.9178"
          width="338.926"
          height="291.041"
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
            result="effect1_foregroundBlur_1580_858"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1580_858"
          x1="65.4335"
          y1="27.1576"
          x2="74"
          y2="171.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1580_858"
          x1="65.4335"
          y1="27.1576"
          x2="74"
          y2="171.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}

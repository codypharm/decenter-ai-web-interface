import React from 'react'

const Star2 = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_f_1573_3070)">
        <path
          d="M9 9C13 13 13 13 21 5C13 13 13 13 17 17C13 13 13 13 5 21C13 13 13 13 9 9Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1573_3070"
          x="0"
          y="0"
          width="26"
          height="26"
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
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_1573_3070" />
        </filter>
      </defs>
    </svg>
  )
}

export default Star2

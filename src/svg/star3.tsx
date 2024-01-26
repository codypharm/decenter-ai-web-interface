import React from 'react'

const Star3 = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1573_3069)">
        <path
          d="M10 10C15 15 15 15 25 5C15 15 15 15 20 20C15 15 15 15 5 25C15 15 15 15 10 10Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1573_3069"
          x="0"
          y="0"
          width="30"
          height="30"
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
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_1573_3069" />
        </filter>
      </defs>
    </svg>
  )
}

export default Star3

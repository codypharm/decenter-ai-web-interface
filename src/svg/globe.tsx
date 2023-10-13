import React from 'react'

export const Globe = () => {
  return (
    <svg
      className="h-[40%] w-[40%] md:h-[20%] md:w-[20%]"
      viewBox="0 0 309 309"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <mask
          id="mask0_1573_3071"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="309"
          height="309"
        >
          <circle
            cx="154.126"
            cy="154.126"
            r="154.126"
            fill="url(#paint0_linear_1573_3071)"
          />
        </mask>
        <g mask="url(#mask0_1573_3071)">
          <g filter="url(#filter0_i_1573_3071)">
            <circle
              cx="154.126"
              cy="154.126"
              r="154.126"
              fill="url(#paint1_linear_1573_3071)"
            />
          </g>
          <g filter="url(#filter1_f_1573_3071)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M311.3 282.505C377.561 251.102 422.701 188.774 422.701 117.013C422.701 13.651 329.052 -70.14 213.531 -70.14C98.0089 -70.14 4.36011 13.651 4.36011 117.013C4.36011 171.366 30.2563 220.307 71.6116 254.499C86.2149 248.291 103.938 245.122 125.238 245.122C246.096 236.956 293.395 252.212 311.3 282.505Z"
              fill="black"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1573_3071"
          x="0"
          y="-3.86207"
          width="308.251"
          height="312.113"
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
            result="effect1_innerShadow_1573_3071"
          />
          <feOffset dy="-3.86207" />
          <feGaussianBlur stdDeviation="4.34483" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1573_3071" />
        </filter>
        <filter
          id="filter1_f_1573_3071"
          x="-64.6744"
          y="-139.174"
          width="556.41"
          height="490.714"
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
            result="effect1_foregroundBlur_1573_3071"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1573_3071"
          x1="136.284"
          y1="56.5633"
          x2="154.126"
          y2="356.843"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1573_3071"
          x1="136.284"
          y1="56.5633"
          x2="154.126"
          y2="356.843"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}

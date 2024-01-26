import React from 'react'

export const Globe3 = () => {
  return (
    <svg
      width="196"
      height="196"
      viewBox="0 0 196 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <mask
          id="mask0_1580_916"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="196"
          height="196"
        >
          <circle cx="98" cy="98" r="98" fill="url(#paint0_linear_1580_916)" />
        </mask>
        <g mask="url(#mask0_1580_916)">
          <g filter="url(#filter0_i_1580_916)">
            <circle cx="98" cy="98" r="98" fill="url(#paint1_linear_1580_916)" />
          </g>
          <g filter="url(#filter1_f_1580_916)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M200.969 47.1535C196.921 93.2077 177.399 118.035 129.863 118.035C2.45813 126.643 3.61196 94.3169 5.35971 45.3509C5.40854 43.9829 5.45783 42.6019 5.50479 41.2085C-18.1973 62.6975 -32.8274 92.2168 -32.8274 124.793C-32.8274 190.515 26.7187 243.793 100.173 243.793C173.626 243.793 233.173 190.515 233.173 124.793C233.173 95.1257 221.039 67.9936 200.969 47.1535Z"
              fill="black"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1580_916"
          x="0"
          y="-3.86207"
          width="196"
          height="199.862"
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
            result="effect1_innerShadow_1580_916"
          />
          <feOffset dy="-3.86207" />
          <feGaussianBlur stdDeviation="4.34483" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1580_916" />
        </filter>
        <filter
          id="filter1_f_1580_916"
          x="-101.862"
          y="-27.826"
          width="404.069"
          height="340.654"
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
            result="effect1_foregroundBlur_1580_916"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1580_916"
          x1="86.6552"
          y1="35.9655"
          x2="98"
          y2="226.897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1580_916"
          x1="86.6552"
          y1="35.9655"
          x2="98"
          y2="226.897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}

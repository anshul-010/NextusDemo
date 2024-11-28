import React from "react";

export const Dots = () => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <g filter="url(#filter0_b_1_1088)">
          <circle cx="18" cy="18" r="18" fill="url(#paint0_linear_1_1088)" />
        </g>
        <g filter="url(#filter1_b_1_1088)">
          <circle cx="18" cy="18" r="15" fill="url(#paint1_linear_1_1088)" />
        </g>
        <g filter="url(#filter2_b_1_1088)">
          <circle cx="18" cy="18" r="12" fill="url(#paint2_linear_1_1088)" />
        </g>
        <defs>
          <filter
            id="filter0_b_1_1088"
            x="-10"
            y="-10"
            width="56"
            height="56"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1_1088"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1_1088"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_1_1088"
            x="-7"
            y="-7"
            width="50"
            height="50"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1_1088"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1_1088"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b_1_1088"
            x="-4"
            y="-4"
            width="44"
            height="44"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1_1088"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1_1088"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_1088"
            x1="0"
            y1="0"
            x2="36.012"
            y2="35.988"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.02" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_1088"
            x1="3"
            y1="3"
            x2="33.01"
            y2="32.99"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.02" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_1088"
            x1="6"
            y1="6"
            x2="30.008"
            y2="29.992"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.02" />
          </linearGradient>
        </defs>
      </svg>
  );
};

import * as React from "react"

const MediumFilledHeart = (props:any) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8 14.333-1.382-1.385c-1.734-1.537-3.035-2.716-3.978-3.867C1.52 7.717 1 6.481 1 5.191 1 2.841 2.837 1 5.182 1 6.202 1 7.21 1.374 8 2.025A4.473 4.473 0 0 1 10.818 1C13.163 1 15 2.841 15 5.191c0 1.29-.52 2.526-1.64 3.89-.944 1.151-2.245 2.33-3.98 3.867L8 14.333Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.343}
    />
  </svg>
)

export default MediumFilledHeart
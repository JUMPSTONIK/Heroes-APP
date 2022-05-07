import * as React from "react"

const SmallHeart = (props:any) => (
  <svg
    width={13}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 11 5.414 9.961c-1.362-1.153-2.385-2.037-3.126-2.9C1.41 6.038 1 5.111 1 4.143 1 2.381 2.443 1 4.286 1c.801 0 1.593.28 2.214.769A3.618 3.618 0 0 1 8.714 1C10.557 1 12 2.38 12 4.143c0 .968-.41 1.895-1.29 2.918-.74.863-1.763 1.747-3.125 2.9L6.5 11Z"
      stroke="#fff"
      strokeWidth={1.343}
    />
  </svg>
)

export default SmallHeart
import * as React from "react"
const Logo = (props:any) => (
  <svg
    width={65}
    height={73}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h65v73H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.00104 0 0 .00093 -.005 0)" />
      </pattern>
      <image
        id="b"
        width={969}
        height={1077}
      />
    </defs>
  </svg>
)
export default Logo
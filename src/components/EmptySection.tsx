import React from "react";
import big_heart from "../assets/big-heart/big-heart.svg"
import BigHeart from "./svgs/BigHeart";

export const EmptySection = () => {
  return (
    <>
      {/* <img
        className="big-heart"
        src={big_heart}
        alt="big heart"
      /> */}
      <BigHeart/>
      <p className="favorite-text">You haven't liked any superhero yet</p>
    </>
  );
};

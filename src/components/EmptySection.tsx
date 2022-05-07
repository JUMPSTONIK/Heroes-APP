import React from "react";
import big_heart from "../assets/big-heart/big-heart.svg"

export const EmptySection = () => {
  return (
    <>
      <img
        className="big-heart"
        src={big_heart}
        alt="big heart"
      />
      <p className="favorite-text">You haven't liked any superhero yet</p>
    </>
  );
};

// import React, { useState } from "react";
// import PropTypes from "prop-types";
import { HeroCardData } from "../helpers/getHeroes";
import Card from "./Card";
import { EmptySection } from "./EmptySection";
// interface CounterAppProps {
//   value: number;
// }

interface LowerSectioProps {
  favoriteHeroeslist: HeroCardData[];
  handleFavorite(hero: HeroCardData): void;
}

const LowerSection = (props: LowerSectioProps) => {
  const ListofCard = props.favoriteHeroeslist.map((superHero) => (
    // Correcto! La key debería ser especificada dentro del array.
    <Card
      key={superHero.id.toString()}
      hero={superHero}
      hadleFavorite={props.handleFavorite}
    />
  ));

  return (
    <>
      <div
        className={
          ListofCard.length === 0 ? "lower-section" : "favorite-heroes-section"
        }
      >
        {ListofCard.length === 0 ? <EmptySection /> : ListofCard}
      </div>
    </>
  );
};

// CounterApp.propTypes = {
//   value: PropTypes.number,
// };

export default LowerSection;

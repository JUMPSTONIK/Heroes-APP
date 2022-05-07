// import React, { useState } from "react";
// import PropTypes from "prop-types";
import { HeroCardData } from "../helpers/getHeroes";
import Card from "./Card";
import { EmptySection } from "./EmptySection";
// interface CounterAppProps {
//   value: number;
// }

interface FavoriteSectioProps {
    favoriteHeroeslist: HeroCardData[];
}

const FavoriteSection = (props: FavoriteSectioProps) => {
    const ListofCard = props.favoriteHeroeslist.map((superHero) => (
        // Correcto! La key debería ser especificada dentro del array.
        <Card
            key={superHero.id.toString()}
            hero={superHero}
            isFavorite={true}
        />
    ));

    return (
        <>
            <div
                className={` animate__fadeInDown ${
                    ListofCard.length === 0
                        ? "Favorite-section"
                        : "favorite-heroes-section"
                }`}
            >
                {ListofCard.length === 0 ? <EmptySection /> : ListofCard}
            </div>
        </>
    );
};

// CounterApp.propTypes = {
//   value: PropTypes.number,
// };

export default FavoriteSection;

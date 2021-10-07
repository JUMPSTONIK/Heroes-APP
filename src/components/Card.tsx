import PropTypes from "prop-types";
import CSS from "csstype";
import { HeroCardData } from "../helpers/getHeroes";

interface CardProps {
  hero: HeroCardData;
  hadleFavorite(hero: HeroCardData): void;
}

const Card = (props: CardProps) => {
  const backgroundtext: CSS.Properties = {
    backgroundImage: `url(${props.hero.image})`,
  };

  const listOfIds = localStorage.getItem("ids")
    ? JSON.parse(localStorage.getItem("ids")!)
    : [];

  return (
    <>
      <div
        className={` card-container ${
          listOfIds[listOfIds.length - 1] === props.hero.id
            ? "liked-recently"
            : ""
        }`}
      >
        <div className="card-background">
          <div className="background-image" style={backgroundtext}></div>
          <div className="card">
            <div className="heroesPicture">
              <img className="hero" src={props.hero.image} alt="" />
              <div className="backgroundFavoriteButton"></div>
              <button
                className="favorite-button"
                type="submit"
                onClick={() => props.hadleFavorite(props.hero)}
              >
                <img
                  className={
                    listOfIds.includes(props.hero.id)
                      ? "mediumHeart-filled"
                      : "mediumHeart"
                  }
                  src={
                    listOfIds.includes(props.hero.id)
                      ? "./assets/medium-filled-heart/medium-filled-heart.svg"
                      : "./assets/small-heart/small-heart.svg"
                  }
                  alt="little heart"
                />
              </button>
            </div>
            <div className="heroesContent">
              <div className="heroes-nickname">{props.hero.name}</div>

              <div className="realName">Real Name: {props.hero.realName}</div>
              <div className="rank-space">
                <img
                  className="fist"
                  src="./assets/fist/fist.svg"
                  alt="fist of ranking"
                />
                <div className="rank">
                  <strong>{props.hero.powerStat}</strong> / 10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.protoTypes = {
  name: PropTypes.string.isRequired,
  realName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  powerStat: PropTypes.number.isRequired,
};

export default Card;
//  Dispatch<SetStateAction<string[]>>

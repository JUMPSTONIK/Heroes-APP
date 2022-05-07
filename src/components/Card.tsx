import CSS from "csstype";
import { HeroCardData } from "../helpers/getHeroes";
import { useObserver } from "mobx-react-lite";
import { useEffect, useRef, useContext } from "react";
import { StoreContext } from "../helpers/storeContext";

interface CardProps {
    hero: HeroCardData;
    isFavorite: boolean;
}

const Card = (props: CardProps) => {
    const backgroundtext: CSS.Properties = {
        backgroundImage: `url(${props.hero.image})`,
    };

    const store = useContext(StoreContext);

    const cardContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        cardContainerRef.current?.classList.add(
            "animate__animated",
            "animate__fadeIn"
        );
    }, []);

    return useObserver(() => (
        <>
            <div
                ref={cardContainerRef}
                className={`card-container ${
                    store.getListOfIds[store.getListOfIds.length - 1] ===
                    props.hero.id
                        ? "liked-recently"
                        : ""
                }`}
            >
                <div className="card-background">
                    <div
                        className="background-image"
                        style={backgroundtext}
                    ></div>
                    <div className="card">
                        <div className="heroesPicture">
                            <img
                                className="hero"
                                src={props.hero.image}
                                alt=""
                            />
                            <div className="backgroundFavoriteButton"></div>
                            <button
                                className="favorite-button"
                                type="submit"
                                onClick={() => {
                                    if (!props.isFavorite) {
                                        window.scroll(
                                            cardContainerRef.current
                                                ?.offsetLeft!,
                                            cardContainerRef.current?.offsetTop!
                                        );
                                    }

                                    store.handleFavorite(props.hero);
                                }}
                            >
                                <img
                                    className={
                                        props.isFavorite
                                            ? "mediumHeart-filled"
                                            : "mediumHeart"
                                    }
                                    src={
                                        props.isFavorite
                                            ? "./assets/medium-filled-heart/medium-filled-heart.svg"
                                            : "./assets/small-heart/small-heart.svg"
                                    }
                                    alt="little heart"
                                />
                            </button>
                        </div>
                        <div className="heroesContent">
                            <div className="heroes-nickname">
                                {props.hero.name}
                            </div>

                            <div className="realName">
                                Real Name: {props.hero.realName}
                            </div>
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
    ));
};

// Card.protoTypes = {
//     name: PropTypes.string.isRequired,
//     realName: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     powerStat: PropTypes.number.isRequired,
// };

export default Card;

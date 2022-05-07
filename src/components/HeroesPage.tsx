import { useEffect, useState, useContext } from "react";
import ListHeroesSection from "./ListHeroesSection";
import { CardLoader } from "./CardLoader";
import { observer } from "mobx-react-lite";
import { StoreContext } from "../helpers/storeContext";
import FavoriteSection from "./FavoriteSection";
// import small_heart from "../assets/small-heart/small-heart.svg";
// import search_icon from "../assets/search/search.svg"
// import logo from "../assets/logo/logo.svg"
import { ArrowUp } from "./svgs/ArrowUp";
import Logo from "./svgs/Logo";
import Search from "./svgs/Search";
import SmallHeart from "./svgs/SmallHeart";


const HeroesPage = observer(() => {
    const [collapse, setCollapse] = useState(true);
    const [areHeroesLoaded, setAreHeroesLoaded] = useState(false);
    const store = useContext(StoreContext);

    useEffect(() => {
        if (store.listOfHeroes !== []) setAreHeroesLoaded(true);
    }, [store.idsList, store.listOfHeroes]);

    const handleCollapseButton = () => {
        setCollapse(!collapse);
    };

    return (
        <>
            <div className="content">
                <div className="logo-section">
                    {/* <img className="logo" src={logo} alt="logo" /> */}
                    <Logo className='logo'/>
                </div>
                <div
                    className={
                        !areHeroesLoaded
                            ? "display-loader-section"
                            : "display-favorites-section"
                    }
                >
                    {areHeroesLoaded ? (
                        <>
                            <div className="upper-section">
                                <div className="liked-space">
                                    <div className="little-favorite-button">
                                        {/* <img
                                            className="littleHeart"
                                            src={small_heart}
                                            alt="little heart"
                                        /> */}
                                        <SmallHeart className='littleHeart'/>
                                    </div>
                                    <p className="liked-text">Liked</p>
                                </div>
                                <button
                                    className={
                                        collapse
                                            ? "display-button"
                                            : "display-button-rotated"
                                    }
                                    onClick={handleCollapseButton}
                                >
                                    <ArrowUp/>
                                </button>
                            </div>
                            {collapse && (
                                <FavoriteSection
                                    favoriteHeroeslist={
                                        store.GeneralAndFavoriteList
                                            .favoriteList
                                    }
                                />
                            )}
                        </>
                    ) : (
                        <CardLoader section={""} />
                    )}
                </div>
                <div className="search-and-general-section">
                    {areHeroesLoaded ? (
                        <>
                            <div className="search-heroes-section">
                                <p className="search-title">All superheroes</p>
                                <div className="search-bar-element">
                                    {/* <img
                                        src={search_icon}
                                        alt=""
                                    /> */}
                                    <Search/>
                                    <input
                                        className="search-input"
                                        type="text"
                                        placeholder="Search"
                                        onChange={(event) =>
                                            (store.setSearchingHero =
                                                event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <ListHeroesSection
                                listOfDataCards={store.searchHeroesList}
                            />
                        </>
                    ) : (
                        <CardLoader section={"general"} />
                    )}
                </div>
            </div>
        </>
    );
});

export default HeroesPage;

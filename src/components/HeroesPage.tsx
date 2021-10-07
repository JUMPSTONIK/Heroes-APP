import { useEffect, useMemo, useRef, useState } from "react";
import ListHeroesSection from "./ListHeroesSection";
import { getHeroes, HeroCardData } from "../helpers/getHeroes";
import LowerSection from "./LowerSection";
import { CardLoader } from "./CardLoader";
import Card from "./Card";

interface GeneralAndFavoriteList {
  generalHeroesList: HeroCardData[];
  favoriteHeroeslist: HeroCardData[];
}

const HeroesPage = () => {
  const [listOfHeroes, setListOfHeroes] = useState<HeroCardData[]>([]);
  const [idsList, setIdsList] = useState<number[]>([]);
  const [searchedHero, setSearchedHero] = useState("");
  const [collapse, setCollapse] = useState(true);
  const [areHeroesLoaded, setAreHeroesLoaded] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    getHeroes().then((elem) => {
      const listOfIds = localStorage.getItem("ids")
        ? JSON.parse(localStorage.getItem("ids")!)
        : [];

      setIdsList(listOfIds);
      setListOfHeroes(elem);
      setAreHeroesLoaded(true);
    });
    // }, 3000);
  }, []);

  const handleFavorite = (hero: HeroCardData) => {
    if (!idsList.includes(hero.id)) {
      const listOfIds = localStorage.getItem("ids")
        ? JSON.parse(localStorage.getItem("ids")!)
        : [];

      listOfIds.push(hero.id);
      localStorage.setItem("ids", JSON.stringify(listOfIds));
      setIdsList(listOfIds);
    } else {
      const listOfIds = localStorage.getItem("ids")
        ? JSON.parse(localStorage.getItem("ids")!)
        : [];

      const newIdsList = listOfIds.filter((id: number) => {
        return id !== hero.id;
      });

      setIdsList(newIdsList);
      localStorage.setItem("ids", JSON.stringify(newIdsList));
    }
  };

  const handleCollapseButton = () => {
    setCollapse(!collapse);
  };

  const { generalHeroesList, favoriteHeroeslist }: GeneralAndFavoriteList =
    useMemo(() => {
      let generalHeroesList: HeroCardData[] = [];
      let favoriteHeroeslist: HeroCardData[] = [];

      listOfHeroes.forEach((elem) => {
        if (!idsList.includes(elem.id)) {
          generalHeroesList.push(elem);
        } else {
          favoriteHeroeslist.push(elem);
        }
      });
      return {
        generalHeroesList,
        favoriteHeroeslist: favoriteHeroeslist.sort(
          (heroA, heroB) =>
            idsList.indexOf(heroB.id) - idsList.indexOf(heroA.id)
        ),
      };
    }, [idsList, listOfHeroes]);

  const searchHeroesList = useMemo(
    () =>
      generalHeroesList.filter((hero) => {
        return (
          (hero.name.includes(searchedHero) ||
            hero.realName.includes(searchedHero)) &&
          !idsList.includes(hero.id)
        );
      }),
    [generalHeroesList, idsList, searchedHero]
  );
  // añadir animaciones como el discord a la tarjetas y busqueda.
  // añadir al repo lo realizado.
  return (
    <>
      <div className="content">
        <div className="logo-section">
          <img className="logo" src="./assets/logo/logo.svg" alt="" />
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
                    <img
                      className="littleHeart"
                      src="./assets/small-heart/small-heart.svg"
                      alt="little heart"
                    />
                  </div>
                  <p className="liked-text">Liked</p>
                </div>
                <button
                  className={
                    collapse ? "display-button" : "display-button-rotated"
                  }
                  onClick={handleCollapseButton}
                >
                  <img src="./assets/arrow-up/arrow-up.svg" alt="arrow up" />
                </button>
              </div>
              {collapse && (
                <LowerSection
                  favoriteHeroeslist={favoriteHeroeslist}
                  handleFavorite={handleFavorite}
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
                  <img src="./assets/search/search.svg" alt="" />
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    onChange={(event) => setSearchedHero(event.target.value)}
                  />
                </div>
              </div>
              <ListHeroesSection
                listOfDataCards={searchHeroesList}
                handleFavorite={handleFavorite}
              />
            </>
          ) : (
            <CardLoader section={"general"} />
          )}
        </div>
      </div>
    </>
  );
};

export default HeroesPage;
function useCallback(
  arg0: () => {
    generalHeroesList: HeroCardData[];
    favoriteHeroeslist: HeroCardData[];
  },
  arg1: (HeroCardData[] | number[])[]
): GeneralAndFavoriteList {
  throw new Error("Function not implemented.");
}

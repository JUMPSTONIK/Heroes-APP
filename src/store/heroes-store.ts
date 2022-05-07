import { flow, makeAutoObservable } from "mobx";
import { getHeroes, HeroCardData } from "../helpers/getHeroes";

export default class HeroesStore {
    listOfHeroes: HeroCardData[] = [];
    idsList: number[] = [];
    searchedHero = "";

    constructor() {
        const listOfIds = localStorage.getItem("ids")
            ? JSON.parse(localStorage.getItem("ids")!)
            : [];
        this.idsList = listOfIds;
        makeAutoObservable(
            this,
            {
                getHeroesList: flow,
            },
            { autoBind: true }
        );
        this.getHeroesList();
    }

    handleFavorite(hero: HeroCardData) {
        if (!this.idsList.includes(hero.id)) {
            const listOfIds = localStorage.getItem("ids")
                ? JSON.parse(localStorage.getItem("ids")!)
                : [];

            listOfIds.push(hero.id);
            localStorage.setItem("ids", JSON.stringify(listOfIds));
            this.idsList = listOfIds;
        } else {
            const listOfIds = localStorage.getItem("ids")
                ? JSON.parse(localStorage.getItem("ids")!)
                : [];

            const newIdsList = listOfIds.filter((id: number) => {
                return id !== hero.id;
            });

            this.idsList = newIdsList;
            localStorage.setItem("ids", JSON.stringify(newIdsList));
        }
    }

    get GeneralAndFavoriteList() {
        let generalHeroesList: HeroCardData[] = [];
        let favoriteHeroeslist: HeroCardData[] = [];

        this.listOfHeroes.forEach((elem) => {
            if (!this.idsList.includes(elem.id)) {
                generalHeroesList.push(elem);
            } else {
                favoriteHeroeslist.push(elem);
            }
        });
        return {
            generalList: generalHeroesList,
            favoriteList: favoriteHeroeslist.sort(
                (heroA, heroB) =>
                    this.idsList.indexOf(heroB.id) -
                    this.idsList.indexOf(heroA.id)
            ),
        };
    }

    get searchHeroesList() {
        return this.GeneralAndFavoriteList.generalList.filter((hero) => {
            return (
                (hero.name.includes(this.searchedHero) ||
                    hero.realName.includes(this.searchedHero)) &&
                !this.idsList.includes(hero.id)
            );
        });
    }

    *getHeroesList() {
        this.listOfHeroes = yield getHeroes();
    }

    set setSearchingHero(name: string) {
        this.searchedHero = name;
    }

    get getListOfIds() {
        return this.idsList;
    }
}

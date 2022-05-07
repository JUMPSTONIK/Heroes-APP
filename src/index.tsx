// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeroesPage from "./components/HeroesPage";
import HeroesStore from "./store/heroes-store";
import { StoreProvider } from "./helpers/storeContext";

const divRoot = document.querySelector("#root");
const heroesStore = new HeroesStore();

ReactDOM.render(
    <StoreProvider value={heroesStore}>
        <HeroesPage />
    </StoreProvider>,
    divRoot
);

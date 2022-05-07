import { Context, useContext } from "react";
import HeroesStore from "../store/heroes-store";

const useStore = (StoreContext: Context<HeroesStore>) => {
    return useContext(StoreContext);
};

export { useStore };

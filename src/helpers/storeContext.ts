import { createContext } from "react";
import HeroesStore from "../store/heroes-store";

export const StoreContext = createContext<HeroesStore>({} as HeroesStore);
export const StoreProvider = StoreContext.Provider;

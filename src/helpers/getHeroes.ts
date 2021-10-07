export interface HeroCardData {
  id: number;
  name: string;
  realName: string;
  image: string;
  powerStat: number;
}

interface SuperHero {
  id: number;
  name: string;
  powerstats: {
    intelligence: number;
    combat: number;
    durability: number;
    power: number;
    speed: number;
    strength: number;
  };
  biography: {
    fullName: string;
  };
  images: {
    md: string;
  };
}

export const getHeroes = async () => {
  let listOfHeroes: HeroCardData[] = [];

  try {
    const apiKey = "akabab.github.io/superhero-api/api/all.json ";
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/${apiKey}`
    );

    // response.then((resp) => {

    const data = await response.json();

    // console.log(data);

    data.forEach((element: SuperHero) => {
      const { combat, durability, intelligence, power, speed, strength } =
        element.powerstats;
      const calcPower: number =
        (combat + durability + intelligence + power + speed + strength) / 60;
      // console.log(element.biography.fullname)
      const hero: HeroCardData = {
        id: element.id,
        name: element.name,
        realName: element.biography.fullName,
        image: element.images.md,
        powerStat: parseFloat(calcPower.toFixed(2)),
      };

      listOfHeroes.push(hero);
    });
    // });
    // });
  } catch (error) {
    // manejo del error
    console.log(error);
  }

  return listOfHeroes;
};

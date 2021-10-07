import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { HeroCardData } from "../helpers/getHeroes";
import { FixedSizeGrid as Grid } from "react-window";
import Card from "./Card";

interface ListHeroesSectionProps {
  listOfDataCards: HeroCardData[];
  handleFavorite(hero: HeroCardData): void;
}

interface properties {
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
}
const ListHeroesSection = (props: ListHeroesSectionProps) => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  const listofCard = useMemo(
    () =>
      props.listOfDataCards.map((superHero) => (
        <Card
          key={superHero.id.toString()}
          hero={superHero}
          hadleFavorite={props.handleFavorite}
        />
      )),
    [props]
  );

  const reactWindowContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDimensions({
      height: reactWindowContainerRef.current?.offsetHeight!,
      width: reactWindowContainerRef.current?.offsetWidth!,
    });
  }, []);

  const cols = useMemo(
    () => Math.trunc((dimensions.width - 22) / 336),
    [dimensions.width]
  );
  // console.log(cols);
  const rows = useMemo(
    () =>
      dimensions.width === 0
        ? 0
        : Math.trunc(listofCard.length / Math.trunc(dimensions.width / 336)),
    [dimensions.width, listofCard.length]
  );

  // console.log(rows);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: reactWindowContainerRef.current?.offsetHeight!,
        width: reactWindowContainerRef.current?.offsetWidth!,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Cell = ({ columnIndex, rowIndex, style }: properties) => (
    <div
      style={{
        ...style,
        width: `${Math.trunc(
          dimensions.width * (dimensions.width / (336 * cols))
        )}`,
      }}
    >
      {listofCard[rowIndex * cols + columnIndex]}
    </div>
  );

  return (
    <>
      <div ref={reactWindowContainerRef} className="list-heroes-section">
        <Grid
          className="grid-conteiner animate__fadeIn"
          columnCount={cols > 0 ? cols : 1}
          columnWidth={336}
          height={
            Math.trunc(dimensions.height) !== Infinity
              ? Math.trunc(dimensions.height)
              : window.innerHeight
          }
          rowCount={rows > 0 ? rows + 1 : listofCard.length}
          rowHeight={222}
          width={Math.trunc(
            dimensions.width * (dimensions.width / (336 * (cols - 3)))
          )}
          style={{ width: "" }}
        >
          {Cell}
        </Grid>
      </div>
    </>
  );
};

export default ListHeroesSection;

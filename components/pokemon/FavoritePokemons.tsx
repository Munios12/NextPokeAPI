import { Card, Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface PageProps {
  pokeFavList: number[];
}

export const FavoritePokemons: FC<PageProps> = ({ pokeFavList }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokeFavList.map((id) => (
        <FavoriteCardPokemon pokeID={id} key={id} />
      ))}
    </Grid.Container>
  );
};

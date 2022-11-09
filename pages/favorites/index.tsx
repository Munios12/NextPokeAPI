import { Card, Grid } from "@nextui-org/react";
import React, { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const PokeTeamPage: FC = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="team">
      <h1>MY TEAM</h1>

      {favoritePokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokeFavList={favoritePokemon} />
      )}
    </Layout>
  );
};

export default PokeTeamPage;

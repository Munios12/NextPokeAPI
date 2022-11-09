import { NextPage, GetStaticProps } from "next";
import React from "react";
import { Layout } from "../components/layouts";
import pokeApi from "../api/pokeApi";
import { iPokemonListRespons, iSmallPokemons } from "../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";

interface iPageProps {
  pokemons: iSmallPokemons[];
}

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${XXX}.svg

const HomePage: NextPage<iPageProps> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

//Esta funcion solo se ejecuta en el lado del servidor en build time,
// solo se puede usar en la carpeta pages
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<iPokemonListRespons>("/pokemon?limit=151");
  const pokemons: iSmallPokemons[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg
`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
export default HomePage;

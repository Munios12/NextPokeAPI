export interface iPokemonListRespons {
  count: number;
  next: string;
  previous: string;
  results: iSmallPokemons[];
}

export interface iSmallPokemons {
  name: string;
  url: string;
  id: number;
  img: string;
}

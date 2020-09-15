import Layout from "../components/Layout";
import PokemonCard, { PokeProps } from "../components/PokemonCard";
import { GetServerSideProps } from "next";

interface MainProps {
  pokemonArr: PokeProps[];
}

const IndexPage = ({ pokemonArr }: MainProps) => {
  return (
    <Layout title="Pokedex Test">
      {pokemonArr?.map((poke) => (
        <PokemonCard key={poke.id} id={poke.id} name={poke.name} />
      )) || <h4>Fetching data...</h4>}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (_) => {
  return fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
      const pokemonArr = data["results"].map((val: any, id: number) => ({
        id,
        name: val.name,
      }));

      return { props: { pokemonArr } };
    })
    .catch((err) => {
      console.log(err);
      return { props: { pokemonArr: null } };
    });
};

export default IndexPage;

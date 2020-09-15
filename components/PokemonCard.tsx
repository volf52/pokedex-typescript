import React from "react";

export interface PokeProps {
  id: number;
  name: string;
}

const PokemonCard = ({ id, name }: PokeProps) => {
  return (
    <div className="card">
      <span className="card--id">#{id}</span>
      <h1 className="card--name">{name}</h1>
    </div>
  );
};

export default PokemonCard;

import React from 'react';
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider";

function SinglePokemonDetails(props) {

    const [pokeDetailsList, setPokeDetailsList] = useState([])
    const [loading, setIsLoading] = useState(true);

    async function fetchPokes() {
        await fetch("https://pokeapi.co/api/v2/pokemon/" + props.match.params.slug).then(e => e.json()).then(data => {
            setPokeDetailsList(state => {
                setIsLoading(false);
                return data;
            });
        })
    }
    function handlePokemonType(type) {
        switch (type) {
            case "normal":
                return <p className="type-normal">{type}</p>

            case "fire":
                return <p className="type-fire">{type}</p>

            case "water":
                return <p className="type-water">{type}</p>

            case "grass":
                return <p className="type-grass">{type}</p>

            case "electric":
                return <p className="type-electric">{type}</p>

            case "ice":
                return <p className="type-ice">{type}</p>

            case "fighting":
                return <p className="type-fighting">{type}</p>

            case "poison":
                return <p className="type-poison">{type}</p>

            case "ground":
                return <p className="type-ground">{type}</p>

            case "flying":
                return <p className="type-flying">{type}</p>

            case "psychic":
                return <p className="type-psychic">{type}</p>

            case "bug":
                return <p className="type-bug">{type}</p>

            case "rock":
                return <p className="type-rock">{type}</p>

            case "ghost":
                return <p className="type-ghost">{type}</p>

            case "dark":
                return <p className="type-dark">{type}</p>

            case "dragon":
                return <p className="type-dragon">{type}</p>

            case "steel":
                return <p className="type-steel">{type}</p>

            case "fairy":
                return <p className="type-fairy">{type}</p>
            default:
                <p></p>
        }

    }

    useEffect(() => {
        fetchPokes();
    });

    if (loading) {
        return (
            <div className="container">loading...</div>
        )
    }

    return (
        <div className="container">
            <div className="w-100">
                <img alt={'thumbnail'} className="poke-image mb-5" src={pokeDetailsList.sprites.other['official-artwork'].front_default} />
                <div className="poke-details-wrapper mb-5">
                    <p className="poke-name">{props.match.params.slug.toUpperCase()}</p>
                    <p className="mb-0"><span className="poke-details-label">Height: </span>{pokeDetailsList.height}</p>
                    <p className="mb-0"><span className="poke-details-label">Weight: </span>{pokeDetailsList.weight}</p>
                    <p className="mb-0"><span className="poke-details-label">Base experience: </span>{pokeDetailsList.base_experience}</p>
                    <p className="mb-0 pokemon-type-wrapper"><span className="poke-details-label">Type of pokemon: </span>
                        {
                            pokeDetailsList.types.map(
                                type => handlePokemonType(type.type.name))}
                    </p>
                </div>
            </div>
            <div className="stats-wrapper row w-100">
                <h3 className="mb-4">Statistics</h3>
                {
                    pokeDetailsList.stats.map(e =>
                        <div className="single-stat col-lg-2 col-md-4 col-sm-4 col-6">
                            <p className="single-stat-name">{e.stat.name}</p>
                            <ChangingProgressProvider values={[0, e.base_stat]}>
                                {value => (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${value}`}
                                        circleRatio={0.75}
                                        styles={buildStyles({
                                            rotation: 1 / 2 + 1 / 8,
                                            strokeLinecap: "butt",
                                            trailColor: "#eee",
                                            pathColor: "crimson",
                                            textColor: "crimson",
                                        })}
                                    />
                                )}
                            </ChangingProgressProvider>
                        </div>)
                }
            </div>

        </div>
    )
}

export default SinglePokemonDetails;
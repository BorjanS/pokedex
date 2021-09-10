import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SinglePokemon from "./SinglePokemon";

function ListingPokemons() {
    const [state, setState] = useState({
        result: [],
        error: "",
        loading: false,
    })

    useEffect(() => {
        const get = async () => {
            setState(state => ({ ...state, loading: true }))
            try {
                const { results } = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118").then(e => e.json())
                setState(state => ({ ...state, result: results }))
            } catch (e) {
                setState(state => ({ ...state, error: e.message }));
            } finally {
                setState((state) => ({ ...state, loading: false }));
            }
        };

        get()
        return () => {

        }
    }, []);

    if (state.error) return <div>{state.error}</div>

    return (
        <div className="container listing-pokemons-wrapper">
            <div className="row">
                {
                    state.result.map((e, index) =>
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Link to={'/pokemon/' + e.name}>
                                <SinglePokemon name={e.name} id={e.url.split('/')[6]} />
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ListingPokemons;
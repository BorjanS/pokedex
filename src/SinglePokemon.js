import React from 'react';

function SinglePokemon(props) {

    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

    return (
        <div className="single-pokemon-listing-wrapper">
            <p className="name-listing">{props.name}</p>

            <div className="thumbnail-listing">
                <img alt={imageUrl + props.id + '.png'} src={imageUrl + props.id + '.png'} />
            </div>
        </div>
    )
}

export default SinglePokemon;
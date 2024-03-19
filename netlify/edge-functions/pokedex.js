import fetch from 'node-fetch'

export default async (req, context) => {
    const eventBody = await req.json()
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region

    const response = await fetch(POKE_API)
    const data = await response.json()

    return Response.json({
        pokemon: data.pokemon_entries.map((entry) => entry.pokemon_species.name)    
    });
};

export const config = {
    path: "/.netlify/functions/pokedex"
  }
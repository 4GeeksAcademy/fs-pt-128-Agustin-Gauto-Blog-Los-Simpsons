export const getCharacters = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters`);
        const data = await response.json()
        dispatch({ type: "get_characters", payload: data.results })
}

export const getCharacter = async (id) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);
        const data = await response.json()
        return data
}

export const getLocations = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/locations`);
        const data = await response.json()
        dispatch({ type: "get_locations", payload: data.results })
}

export const getLocation = async (id) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/locations/${id}`);
        const data = await response.json()
        return data
}

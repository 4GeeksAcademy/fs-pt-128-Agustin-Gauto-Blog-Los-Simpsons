export const getCharacters = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters`);
    console.log(response);
        const data = await response.json()
        console.log(data);
        dispatch({ type: "get_characters", payload: data.results })
}

export const getLocations = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/locations`);
    console.log(response);
        const data = await response.json()
        console.log(data);
        dispatch({ type: "get_location", payload: data.results })
}

export const getCharacter = async (id) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);
        const data = await response.json()
        return data
}
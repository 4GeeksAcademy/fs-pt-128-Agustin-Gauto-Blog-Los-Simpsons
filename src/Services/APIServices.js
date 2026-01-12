export const getCharacters = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters`);
    console.log(response);
        const data = await response.json()
        console.log(data);
        dispatch({ type: "get_characters", payload: data.results })
}
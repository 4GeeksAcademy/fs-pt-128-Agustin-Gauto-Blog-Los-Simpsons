import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const CardSmall = ({ character}) => {

    const { store, dispatch } = useGlobalReducer()

    const favorite = store.favorites.some( favorite => favorite.id === character.id )

    
    const addFavorite = () => {
        dispatch({type: "add_favorites", payload: character})
	}


    return (
        <>
            <div className="card m-2" style={{ minWidth: "18rem", height: "560px" }}>
                <img src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">{character.gender}</p>
                    <p className="card-text" style={{height: "80px"}}>{character.occupation}</p>
                    <p className="card-text">{character.birthdate ? character.birthdate : "unknown"}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/character/${character.id}`}>
                        <a type="button" className="btn btn-primary">Learn more!</a>
					</Link>
                        <button type="button" className="btn btn-outline-warning" onClick={addFavorite}><i className={`${favorite ? "fa-solid" : "fa-regular"} fa-heart`}></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const CardLocation = ({ location }) => {

    const { store, dispatch } = useGlobalReducer()

    
        const favorite = store.favoritesLocation.some( favorite => favorite.id === location.id )
    
        
        const addFavoriteLocation = () => {
            dispatch({type: "add_favorites_location", payload: location})
        }

    return (
        <>
            <div className="card m-2" style={{ minWidth: "18rem", height: "460px" }}>
                <img src={`https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`} style={{height: "200px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{height: "50px"}} >{location.name}</h5>
                    <p className="card-text" style={{height: "30px"}}>{location.use}</p>
                    <p className="card-text" style={{height: "70px"}} >{location.town ? location.town : "unknown"}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/location/${location.id}`}>
                        <a type="button" className="btn btn-primary">Learn more!</a>
                    </Link>
                        <button type="button" className="btn btn-outline-warning" onClick={addFavoriteLocation}><i className={`${favorite ? "fa-solid" : "fa-regular"} fa-heart`}></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
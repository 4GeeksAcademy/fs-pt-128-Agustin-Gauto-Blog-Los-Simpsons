import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const CardBig = ({ character }) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <>
    
            <div className="card m-auto" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="">
                        <img src={`https://cdn.thesimpsonsapi.com/500/character/1.webp`} alt="" />
                        <div>
                            <h1>TITULO</h1>
                            <p>texto</p>
                        </div>
                    </div>
                    <Link to="/">
                    <a className="btn btn-primary">Return to the main page</a>
				</Link>
                </div>
            </div>
        </>
    )
}
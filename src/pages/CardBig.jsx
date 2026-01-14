import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getCharacter } from "../Services/APIServices"

export const CardBig = () => {

    const { store, dispatch } = useGlobalReducer()

    const {id} = useParams()
    
    const [character, setCharacter ] = useState({})

    const getCharacterData = async () => { 
        const characterData = await getCharacter(id)
        setCharacter(characterData)
    }

    useEffect(()=>{
        getCharacterData()
      },[])
   


    return (
        <>
    
            <div className="card m-auto" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <img src={`https://cdn.thesimpsonsapi.com/500/character/${id}.webp`} alt="" />
                        <div>
                            <h1>{character.name}</h1>
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
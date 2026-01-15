import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getCharacter } from "../Services/APIServices"

export const CardBig = () => {

    const { store, dispatch } = useGlobalReducer()

    const { id } = useParams()
    
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
    
            <div className="card m-auto" style={{width: "100rem"}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                        <img src={`https://cdn.thesimpsonsapi.com/500/character/${id}.webp`} alt="" />
                        </div>
                        <div className="col-6">
                            <h1>{character.name}</h1>
                            <p>Birthdate: {character.birthdate}</p>
                            <p>Age: {character.age}</p>
                            <p>Gender {character.gender}</p>
                            <p>occupation: {character.occupation}</p>

                            <ul>
                        {character.phrases && character.phrases.map((frase, index) => (
                           <li key={index} className="list-group-item">
                             <i class="fa-regular fa-message"></i> <i>"{frase}"</i>
                           </li>
                        ))}
                     </ul>
                        </div>
                    </div>
                    <Link to="/">
                    <a className="btn btn-primary m-5">Return to the main page</a>
				</Link>
                </div>
            </div>
        </>
    )
}
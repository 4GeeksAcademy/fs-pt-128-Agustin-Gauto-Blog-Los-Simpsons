import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getLocation } from "../Services/APIServices"


export const CardBigLocation = () => {

    const { store, dispatch } = useGlobalReducer()

    const { id } = useParams()
    
    const [location, setLocation ] = useState({})

    const getLocationData = async () => { 
        const LocationData = await getLocation(id)
        setLocation(LocationData)
        
    }
   
    useEffect(()=>{
        getLocationData()
      },[])


    return (
        <>
    
            <div className="card m-auto" style={{width: "100rem"}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                        <img src={`https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`} alt="" />
                        </div>
                        <div className="col-6">
                            <h1>{location.name}</h1>
                            <p>{location.town}</p>
                            <p>{location.use}</p>
                            <p>{location.description}</p>
                        </div>
                    </div>
                    <Link className="d-flex justify-content-center" to="/">
                    <a className="btn btn-primary ">Return to the main page</a>
                </Link>
                </div>
            </div>
        </>
    )
}
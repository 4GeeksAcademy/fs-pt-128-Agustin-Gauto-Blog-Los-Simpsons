import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardSmall } from "./CardSmall.jsx";
import { getCharacters, getLocations } from "../Services/APIServices.js";
import { CardLocation } from "../components/CardLocation.jsx";


export const Home = () => {

	

  const {store, dispatch} =useGlobalReducer()

  useEffect(()=>{
	getCharacters(dispatch)
	getLocations(dispatch)
	
  },[])

	return (
		<>
		<h3 className="titulos-textos">Characters:</h3>
			<div className="cardSmall">
			{
				store.characters.map(character => (
					<CardSmall character={character} key={character.id} />
				))
			}
			</div>
			<h3 className="titulos-textos">Locations:</h3>
			<div className="cardSmall">
			{
				store.locations.map(location => (
					<CardLocation location={location} key={location.id} />
				))
			}
			</div>
		</>
	);
}; 
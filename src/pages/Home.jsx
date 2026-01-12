import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardSmall } from "./CardSmall.jsx";
import { getCharacters } from "../Services/APIServices.js";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(()=>{
	getCharacters(dispatch)
  },[])

	return (
		<>
			<div className="cardSmall">
			{
				store.characters.map(character => (
					<CardSmall character={character} key={character.id} />
				))
			}
			</div>
		</>
	);
}; 
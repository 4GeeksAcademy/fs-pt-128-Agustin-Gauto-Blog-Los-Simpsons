import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = ({ favorites }) => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/960px-The_Simpsons_yellow_logo.svg.png" alt="" style={{ height: "100px" }} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown-center">
						<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites  <i className="fa-regular fa-heart"></i>
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#"><b>Characters:</b></a></li>
							{store.favorites.length === 0 ? (
								<li><span className="dropdown-item-text text-muted">No hay favoritos</span></li>
							) : (
								store.favorites.map((favorite) => (
									<li key={favorite.id} className="d-flex align-items-center dropdown-item">
										<Link to={`/character/${favorite.id}`} className="text-decoration-none text-dark flex-grow-1">
											{favorite.name}
										</Link>
										<i
											className="fa-solid fa-trash ms-3"
											style={{ cursor: "pointer" }}
											onClick={() => dispatch({ type: "delete_favorite", payload: favorite.id })}
										></i>
									</li>
								))
							)}
							<li><a className="dropdown-item" href="#"><b>Location:</b></a></li>
							{store.favoritesLocation.length === 0 ? (
								<li><span className="dropdown-item-text text-muted">No hay favoritos</span></li>
							) : (
								store.favoritesLocation.map((location) => (
									<li key={location.id} className="d-flex align-items-center dropdown-item">
										<Link to={`/location/${location.id}`} className="text-decoration-none text-dark flex-grow-1">
											{location.name}
										</Link>
										<i
											className="fa-solid fa-trash ms-3"
											style={{ cursor: "pointer" }}
											onClick={() => dispatch({ type: "delete_favorite_location", payload: location.id })}
										></i>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
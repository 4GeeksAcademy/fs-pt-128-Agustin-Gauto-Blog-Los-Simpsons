import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/960px-The_Simpsons_yellow_logo.svg.png" alt="" style={{ height: "100px" }} />
				</Link>
				<div className="ml-auto">
					<div class="dropdown-center">
						<button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites  <i class="fa-regular fa-heart"></i>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
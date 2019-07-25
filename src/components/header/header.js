import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';

const Header = ({ onHeaderChange }) => {
	return (
		<div className="header d-flex">
			<h3>
				<Link to='/' href="#">Star DB </Link>
			</h3>
			<ul className="d-flex">
				<li>
					<Link to="/people/">People</Link>
				</li>
				<li>
					<Link to="/planet/">Planets</Link>
				</li>
				<li>
					<Link to="/starship/">Starships</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/secret">Secret</Link>
				</li>
			</ul>
			<button
				className='btn btn-primary btn-sm'
				onClick={onHeaderChange}
			>
				Changer
      		</button>
		</div>
	);
};

export default Header;
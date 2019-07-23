import React from 'react';

import './header.css';

const Header = ({ onHeaderChange }) => {
	return (
		<div className="header d-flex">
			<h3>
				<a href="#">
					Star DB
        </a>
			</h3>
			<ul className="d-flex">
				<li>
					<a href="#">People</a>
				</li>
				<li>
					<a href="#">Planets</a>
				</li>
				<li>
					<a href="#">Starships</a>
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
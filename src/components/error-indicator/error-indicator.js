import React from 'react';

const ErrorIndicator = () => {
	return(
		<div className='error-indicator'>
			<p className='boom'>Boom!</p>
			<p>Somesing has gone terribly wrong</p>
			<p>(but we alredy send droids to fix it)</p>
		</div>
	)
}

export default ErrorIndicator;
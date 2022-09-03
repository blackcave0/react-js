import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
	return (
		<>
			<h1>Error Page</h1>
			<p>Page not found</p>
			<NavLink to='/'>
				<button className='btn btn-outline-success'>Go back</button>
			</NavLink>

			<div className='cards card mt-5' style={{width : '18rem'}}>
				<div className='card-body'>
					<h5 className='card-title'>Card Title</h5>
					<p className='card-text'>This is card designed by boostrap new version </p>
				</div>
			</div>
		</>
	)
}

export default ErrorPage
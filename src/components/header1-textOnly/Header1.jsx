/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './header1.css';
export default function Header1(props) {
	return (
		<>
			{/* <!-- Header ************************************************** --> */}
			<div id='header' className='container '>
				<h1>{props.category.category}</h1>
				<p>{props.category.description}</p>
			</div>
		</>
	);
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './hero-homePage.css';
import { studentWork } from '../../../public';

const HeroHomepage = (props) => {
	return (
		<>
			{/* <!-- Header ********************************************************* --> */}
			<div id='homeHeader' className='container text-center my-5'>
				<div className='row align-items-center'>
					<div className='col-md-6'>
						<img className='headerImg' src={studentWork} />
					</div>
					<div className='col-md-6'>
						<p>{props.teacher}</p>
						<h1>{props.websiteSlogan}</h1>
						{/* <button href='./webPages/contact.html' type='button' className='btn btn-dark mt-5'>
							Contact Us
						</button> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroHomepage;

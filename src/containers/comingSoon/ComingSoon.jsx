/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { studentWork } from '../../../public';

const ComingSoon = () => {
	return (
		<div className='px-4 pt-5 my-5 text-center border-bottom'>
			<h1 className='display-4 fw-bold text-body-emphasis'>Coming Soon!</h1>
			<div className='col-lg-6 mx-auto'>
				<p className='lead mb-4'>
					The projects in this category have yet to be covered this school year. Check back periodically. In the mean time, have a look at some of our other projects!
				</p>
				<div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
					<button type='button' className='btn btn-primary btn-lg px-4 me-sm-3'>
						<Link to='/' className='nav-link '>
							Home
						</Link>
					</button>
				</div>
			</div>
			<div className='container px-5'>
				<img src={studentWork} className='img-fluid border rounded-3 shadow-lg mb-4' alt='Example image' loading='lazy' />
			</div>
		</div>
	);
};

export default ComingSoon;

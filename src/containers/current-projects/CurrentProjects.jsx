/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './currentProjects.css';
import { PopupCarousel } from '../../components';

export default function CurrentProjects(props) {
	return (
		<>
			{/* <!-- Current Project Categories mapped ********************************************** --> */}
			<div id={props.category.id} className='currentProjectsCategories'>
				{props.category.classOf2025.categories.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<div id={item.id} style={{ backgroundImage: `url(${item.displayImage})` }}>
								<a className='btn btn-primary' data-bs-toggle='modal' data-bs-target={`#${item.id}` + 'Modal'} role='button' aria-controls='offcanvasExample'>
									<h2>{item.name}</h2>
								</a>
							</div>
						</React.Fragment>
					);
				})}
			</div>

			{/* popup modal */}
			{props.category.classOf2025.categories.map((item, index) => {
				return <PopupCarousel item={item} key={index} />;
			})}
		</>
	);
}

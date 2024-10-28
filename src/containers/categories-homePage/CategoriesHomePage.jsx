/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './categoriesHomePage.css';
const CategoriesHomePage = (props) => {
	return (
		<>
			<div className='container text-center categories'>
				<div className='row align-items-center'>
					{props.classMaterial.map((category, index) => {
						return (
							<React.Fragment key={index}>
								<div className='col-md-6 my-5 px-0'>
									<Link to={category.link}>
										<img src={category.displayImage} alt='animations' />
										<div className='categoryImage'></div>
										<h2 className='pt-4'>{category.category}</h2>
									</Link>
									{/* <a href='webPages/animations.html'>
										<img src='../public/images/websiteImages/goldenTornado.webp' alt='animations' />
										<div class='categoryImage'></div>
										<h2 class='pt-4'>{category}</h2>
									</a> */}
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</div>
			{/* <!-- Project categories ************************************************ --> */}
			{/* <div id='categoryPreviews'>
				<div class='container text-center first2categories'>
					<div class='row align-items-center'>
						<div class='col-md-6 my-5 px-0'>
							<a href='webPages/animations.html'>
								<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='animations' />
								<div class='categoryImage'></div>
								<h2 class='pt-4'>3D Animation</h2>
							</a>
						</div>
						<div class='col-md-6 my-5 px-0'>
							<a href='webPages/architecture.html'>
								<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='architecture' />
								<div class='categoryImage'></div>
								<h2 class='pt-4'>Architectural Design</h2>
							</a>
						</div>
					</div>
				</div>
				<div class='container text-center second2categories'>
					<div class='row align-items-center'>
						<div class='col-md-6 my-5 px-0'>
							<a href='webPages/3dPrinting.html'>
								<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='3D printing' />
								<div class='categoryImage'></div>
								<h2 class='pt-4'>3D Printing</h2>
							</a>
						</div>
						<div class='col-md-6 my-5 px-0'>
							<a href='webPages/industrialDesigns.html'>
								<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='industrial design' />
								<div class='categoryImage'></div>
								<h2 class='pt-4'>Industrial Design</h2>
							</a>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default CategoriesHomePage;

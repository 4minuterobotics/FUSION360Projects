/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Header1 } from '../../components';
import { CurrentProjects } from '../../containers';
import './ArchitectualDesign.css';

export default function ArchitectualDesign(props) {
	return (
		<>
			{/* <!-- Header ************************************************** --> */}
			<Header1 category={props.category} />
			<CurrentProjects category={props.category} />

			{/* <!-- Current Project Categories mapped ********************************************** --> */}
			{/* <div id={props.category.id} className="currentProjectsCategories">
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
			</div> */}

			{/* <!-- Categories ********************************************** --> */}
			{/* <div id='architecturalDesignCategories'>
				<div id='urbanPlanning' style={{ backgroundImage: `url(${props.category.classOf2025.categories[0].displayImage})` }}>
					<a className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#urbanPlanningModal' role='button' aria-controls='offcanvasExample'>
						<h2>Urban Planning</h2>
					</a>
				</div>
				<div id='stadiumArchitecture'>
					<a className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#stadiumArchitectureModal' role='button' aria-controls='offcanvasExample'>
						<h2>Stadium Architecture</h2>
					</a>
				</div>
				<div id='attractionDesign'>
					<a className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#attractionDesignModal' role='button' aria-controls='offcanvasExample'>
						<h2>Attraction Design</h2>
					</a>
				</div>
			</div> */}

			{/* <!-- Neighborhood Modal popup ***************************************************** --> */}
			{/* <div className='modal fade' id='urbanPlanningModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel1'>
								Neighborhood Design Projects
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'> */}
			{/* <!-- Neighborhood Carousel ***************************************************** --> */}

			{/* <div id='neighnorhoodCarouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
								<div className='carousel-indicators'>
									<button
										type='button'
										data-bs-target='#neighnorhoodCarouselExampleCaptions'
										data-bs-slide-to='0'
										className='active'
										aria-current='true'
										aria-label='Slide 1'
									></button>
									<button type='button' data-bs-target='#neighnorhoodCarouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
									<button type='button' data-bs-target='#neighnorhoodCarouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></button>
								</div>
								<div className='carousel-inner'>
									<div className='carousel-item active'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>First slide label</h5>
											<p>Some representative placeholder content for the first slide.</p>
										</div>
									</div>
									<div className='carousel-item'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>Second slide label</h5>
											<p>Some representative placeholder content for the second slide.</p>
										</div>
									</div>
									<div className='carousel-item'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>Third slide label</h5>
											<p>Some representative placeholder content for the third slide.</p>
										</div>
									</div>
								</div>
								<button className='carousel-control-prev' type='button' data-bs-target='#neighnorhoodCarouselExampleCaptions' data-bs-slide='prev'>
									<span className='carousel-control-prev-icon' aria-hidden='true'></span>
									<span className='visually-hidden'>Previous</span>
								</button>
								<button className='carousel-control-next' type='button' data-bs-target='#neighnorhoodCarouselExampleCaptions' data-bs-slide='next'>
									<span className='carousel-control-next-icon' aria-hidden='true'></span>
									<span className='visually-hidden'>Next</span>
								</button>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div> */}

			{/* <!-- Stadium Modal popup ***************************************************** --> */}
			{/* <div className='modal fade' id='stadiumArchitectureModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel2'>
								Stadium Architecture Projects
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'> */}
			{/* <!-- Stadium Carousel ***************************************************** --> */}

			{/* <div id='stadiumCarouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
								<div className='carousel-indicators'>
									<button
										type='button'
										data-bs-target='#stadiumCarouselExampleCaptions'
										data-bs-slide-to='0'
										className='active'
										aria-current='true'
										aria-label='Slide 1'
									></button>
									<button type='button' data-bs-target='#stadiumCarouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
									<button type='button' data-bs-target='#stadiumCarouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></button>
								</div>
								<div className='carousel-inner'>
									<div className='carousel-item active'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>First slide label</h5>
											<p>Some representative placeholder content for the first slide.</p>
										</div>
									</div>
									<div className='carousel-item'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>Second slide label</h5>
											<p>Some representative placeholder content for the second slide.</p>
										</div>
									</div>
									<div className='carousel-item'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>Third slide label</h5>
											<p>Some representative placeholder content for the third slide.</p>
										</div>
									</div>
								</div>
								<button className='carousel-control-prev' type='button' data-bs-target='#stadiumCarouselExampleCaptions' data-bs-slide='prev'>
									<span className='carousel-control-prev-icon' aria-hidden='true'></span>
									<span className='visually-hidden'>Previous</span>
								</button>
								<button className='carousel-control-next' type='button' data-bs-target='#stadiumCarouselExampleCaptions' data-bs-slide='next'>
									<span className='carousel-control-next-icon' aria-hidden='true'></span>
									<span className='visually-hidden'>Next</span>
								</button>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div> */}

			{/* <!-- Attraction Modal popup ***************************************************** --> */}
			{/* <div className='modal fade' id='attractionDesignModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel3'>
								Attraction Design Projects
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'> */}
			{/* <!-- Attraction Carousel ***************************************************** --> */}

			{/* <div id='attractionCarouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
								<div className='carousel-indicators'>
									<button
										type='button'
										data-bs-target='#attractionCarouselExampleCaptions'
										data-bs-slide-to='0'
										className='active'
										aria-current='true'
										aria-label='Slide 1'
									></button>
									<button type='button' data-bs-target='#attractionCarouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
									<button type='button' data-bs-target='#attractionCarouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></button>
								</div>
								<div className='carousel-inner'>
									<div className='carousel-item active'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>First slide label</h5>
											<p>Some representative placeholder content for the first slide.</p>
										</div>
									</div>
									<div className='carousel-item'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>Second slide label</h5>
											<p>Some representative placeholder content for the second slide.</p>
										</div>
									</div>
									<div className='carousel-item'>
										<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
										<div className='carousel-caption d-none d-md-block'>
											<h5>Third slide label</h5>
											<p>Some representative placeholder content for the third slide.</p>
										</div>
									</div>
								</div>
								<button className='carousel-control-prev' type='button' data-bs-target='#attractionCarouselExampleCaptions' data-bs-slide='prev'>
									<span className='carousel-control-prev-icon' aria-hidden='true'></span>
									<span className='visually-hidden'>Previous</span>
								</button>
								<button className='carousel-control-next' type='button' data-bs-target='#attractionCarouselExampleCaptions' data-bs-slide='next'>
									<span className='carousel-control-next-icon' aria-hidden='true'></span>
									<span className='visually-hidden'>Next</span>
								</button>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}

/* eslint-disable react/prop-types */
import React from 'react';
import './popupCarousel.css';
const PopupCarousel = (props) => {
	const { item } = props;
	const projectsExcludingFirst = item.projects.slice(1); // Exclude the first project for other slides when mapping shit where the first slide has slighly different bootstrap settings

	return (
		<React.Fragment>
			{/* Neighborhood Modal popup */}
			<div className='modal modalCustomization fade' id={`${item.id}Modal`} tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel1'>
								{item.categoryDescription}
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							{/* Projects Carousel */}
							<div id={`${item.id}ModalCaption`} className='carousel slide' data-bs-ride='carousel'>
								{/* Carousel Indicators */}
								<div className='carousel-indicators'>
									<button type='button' data-bs-target={`#${item.id}ModalCaption`} data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
									{projectsExcludingFirst.map((_, index) => (
										<button
											key={`indicator-${index}`}
											type='button'
											data-bs-target={`#${item.id}ModalCaption`}
											data-bs-slide-to={index + 1}
											aria-label={`Slide ${index + 2}`}
										></button>
									))}
								</div>

								{/* Carousel Items */}
								<div className='carousel-inner'>
									<div className='carousel-item active'>
										<img src={item.projects[0].screenshot} className='d-block w-100' alt='...' />
										<div className='carousel-caption  d-md-block'>
											<h5>{item.projects[0].author}</h5>
											<a href={item.projects[0].url}>
												<p>View in 3D</p>
											</a>
										</div>
									</div>

									{projectsExcludingFirst.map((project, index) => (
										<div key={`project-${index}`} className='carousel-item'>
											<img src={project.screenshot} className='d-block w-100' alt='...' />
											<div className='carousel-caption  d-md-block'>
												<h5>{project.author}</h5>
												<a href={project.url}>
													<p>View in 3D</p>
												</a>
											</div>
										</div>
									))}
								</div>

								{/* Carousel Controls */}
								<button className='carousel-control-prev' type='button' data-bs-target={`#${item.id}ModalCaption`} data-bs-slide='prev'>
									<span className='carousel-control-prev-icon' style={{ backgroundColor: 'black' }} aria-hidden='true'></span>
									<span className='visually-hidden'>Previous</span>
								</button>
								<button className='carousel-control-next' type='button' data-bs-target={`#${item.id}ModalCaption`} data-bs-slide='next'>
									<span className='carousel-control-next-icon' style={{ backgroundColor: 'black' }} aria-hidden='true'></span>
									<span className='visually-hidden'>Next</span>
								</button>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>

		//whole page used to look like this.
		// <React.Fragment key={props.index}>
		//  <!-- Neighborhood Modal popup ***************************************************** -->
		// <div className='modal fade' id={`${props.item.id}` + 'Modal'} tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
		// 	<div className='modal-dialog modal-dialog-scrollable'>
		// 		<div className='modal-content'>
		// 			<div className='modal-header'>
		// 				<h1 className='modal-title fs-5' id='exampleModalLabel1'>
		// 					{props.item.categoryDescription}
		// 				</h1>
		// 				<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
		// 			</div>
		// 			<div className='modal-body'>
		// <!--projects Carousel ***************************************************** -->
		// 				<div id={`${props.item.id}ModalCaption`} className='carousel slide' data-bs-ride='carousel'>
		// 					<div className='carousel-indicators'>
		// 						<button
		// 							type='button'
		// 							data-bs-target={`#${props.item.id}ModalCaption`}
		// 							data-bs-slide-to='0'
		// 							className='active'
		// 							aria-current='true'
		// 							aria-label='Slide 1'
		// 						></button>
		// 						<button type='button' data-bs-target={`#${props.item.id}ModalCaption`} data-bs-slide-to='1' aria-label='Slide 2'></button>
		// 						<button type='button' data-bs-target={`#${props.item.id}ModalCaption`} data-bs-slide-to='2' aria-label='Slide 3'></button>
		// 					</div>
		// 					<div className='carousel-inner'>
		// 						<div className='carousel-item active'>
		// 							<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
		// 							<div className='carousel-caption d-none d-md-block'>
		// 								<h5>{`${props.item.id}`}</h5>
		// 								<p>Some representative placeholder content for the first slide.</p>
		// 							</div>
		// 						</div>
		// 						<div className='carousel-item'>
		// 							<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
		// 							<div className='carousel-caption d-none d-md-block'>
		// 								<h5>{`#${props.item.id}`} </h5>
		// 								<p>Some representative placeholder content for the second slide.</p>
		// 							</div>
		// 						</div>
		// 						<div className='carousel-item'>
		// 							<img src='../images/studentWork/goldenTornado.webp' className='d-block w-100' alt='...' />
		// 							<div className='carousel-caption d-none d-md-block'>
		// 								<h5>{`#${props.item.id}Modal`} </h5>
		// 								<p>Some representative placeholder content for the third slide.</p>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<button className='carousel-control-prev' type='button' data-bs-target={`#${props.item.id}ModalCaption`} data-bs-slide='prev'>
		// 						<span className='carousel-control-prev-icon' aria-hidden='true'></span>
		// 						<span className='visually-hidden'>Previous</span>
		// 					</button>
		// 					<button className='carousel-control-next' type='button' data-bs-target={`#${props.item.id}ModalCaption`} data-bs-slide='next'>
		// 						<span className='carousel-control-next-icon' aria-hidden='true'></span>
		// 						<span className='visually-hidden'>Next</span>
		// 					</button>
		// 				</div>
		// 			</div>
		// 			<div className='modal-footer'>
		// 				<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
		// 					Close
		// 				</button>
		// 				<button type='button' className='btn btn-primary'>
		// 					Save changes
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		// </React.Fragment>
	);
};

export default PopupCarousel;

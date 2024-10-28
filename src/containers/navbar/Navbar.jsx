/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	return (
		<>
			{/* <!--Navbar ***********************************************************--> */}
			<nav className='navbar navbar-expand-lg bg-body-tertiary py-3'>
				<div className='container-fluid'>
					{/* <a className='navbar-brand' href='./index.html'>
						PBHS Fusion 360
					</a> */}
					<Link to='/' className='navbar-brand '>
						PBHS Fusion 360
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse ms-5' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								{/* <a class='nav-link active' aria-current='page' href='#'>
									Home
								</a> */}
								<Link to='/' className='nav-link '>
									Home
								</Link>
							</li>
							<li className='nav-item dropdown'>
								<a className='nav-link dropdown-toggle' href='#categoryPreviews' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
									{' '}
									Projects{' '}
								</a>
								<ul className='dropdown-menu'>
									<li>
										{/* <a className='dropdown-item' href='./webPages/animations.html'>
											3D Animations
										</a> */}
										<Link to='/architecturalDesign' className='dropdown-item'>
											Architectural Design
										</Link>
									</li>
									<li>
										{/* <a className='dropdown-item' href='./webPages/architecture.html'>
											Architectural Visualization
										</a> */}
										<Link to='/threeDAnimation' className='dropdown-item'>
											3D Animations
										</Link>
									</li>
									{/* <!-- <li><hr class="dropdown-divider"></li> --> */}
									<li>
										{/* <a className='dropdown-item' href='./webPages/3dPrinting.html'>
											3D Printing
										</a> */}
										<Link to='/threeDPrinting' className='dropdown-item'>
											3D Printing
										</Link>
									</li>
									<li>
										{/* <a className='dropdown-item' href='./webPages/industrialDesigns.html'>
											Industrial Design
										</a> */}
										<Link to='/industrialDesign' className='dropdown-item'>
											Industrial Design
										</Link>
									</li>
									{/* <!-- 1. 3D Animator - Creating animated sequences for films, video games, and advertisements using 3D software. -->
								<!-- 2. Architectural Visualizer - Creating realistic 3D renderings of architectural designs to visualize buildings, interiors, and landscapes before construction.  -->
								<!-- 3. 3D Printing Specialist - Preparing and optimizing designs for 3D printing in various industries, such as healthcare (prosthetics), fashion (jewelry), and engineering (prototypes). -->
								<!-- 4. Industrial Designer - Creating and refining the design of manufactured products, focusing on usability, function, and form.--> */}
								</ul>
							</li>

							{/* <li className='nav-item'>
								<a className='nav-link' href='./webPages/aboutUs.html'>
									About Us
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='./webPages/contact.html'>
									Contact
								</a>
							</li> */}

							{/* <!-- <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> --> */}
						</ul>
						{/* <div style={{ marginLeft: 'auto', padding: '8px, 8px, 8px, 0px' }}>
							<Link to='/login' className='nav-link ' style={{}}>
								Admin
							</Link>
						</div> */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

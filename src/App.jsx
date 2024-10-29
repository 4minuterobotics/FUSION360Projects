/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Footer } from './containers';
import { ScrollToTop } from './components';
// import { navbarContext } from './contexts/navbarContext';

import './App.css';
import { classInfo } from './data';
import { categories } from './data';
import { classMaterial } from './data';
import { Home, ArchitectualDesign, ThreeDAnimations, ThreeDPrinting, IndustrialDesign, ComingSoonPage, Login, Admin } from './pages';

let architecturalDesignData = classMaterial.find((item) => {
	return item.category == 'Architectural Design';
});
function App() {
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);
	return (
		<>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home classInfo={classInfo} classMaterial={classMaterial} />} />
				<Route path='/architecturalDesign' element={<ArchitectualDesign category={architecturalDesignData} />} />
				<Route path='/threeDAnimation' element={<ThreeDAnimations />} />
				<Route path='/threeDPrinting' element={<ThreeDPrinting />} />
				<Route path='/industrialDesign' element={<IndustrialDesign />} />
				<Route path='/comingSoon' element={<ComingSoonPage />} />
				<Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
				<Route path='/admin' element={isAuthenticated ? <Admin /> : <Navigate to='/login' />} />
			</Routes>
			{/* <Home /> */}
			{/* <!-- Header ********************************************************* --> */}
			{/* <div id='homeHeader' className='container text-center my-5'>
				<div className='row align-items-center'>
					<div className='col-md-6'>
						<img className='headerImg' src='../public/images/websiteImages/goldenTornado.webp' />
					</div>
					<div className='col-md-6'>
						<p>Mr. Lawrence</p>
						<h1>Explore the Visionary Projects of Future Designers.</h1>
						<button href='./webPages/contact.html' type='button' className='btn btn-dark mt-5'>
							Contact Us
						</button>
					</div>
				</div>
			</div> */}

			{/* <!-- Project categories mapped ************************************************ --> */}
			{/* <div id='categoryPreviews'>
				<div className='container text-center first2categories'>
					<div className='row align-items-center'>
						{categories.map((category) => {
							return (
								<>
									<div className='col-md-6 my-5 px-0'>
										<a href='webPages/animations.html'>
											<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='animations' />
											<div className='categoryImage'></div>
											<h2 className='pt-4'>{category}</h2>
										</a>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div> */}

			{/* <!-- Project categories ************************************************ --> */}
			{/* <div id='categoryPreviews'>
				<div className='container text-center first2categories'>
					<div className='row align-items-center'>
						<div className='col-md-6 my-5 px-0'>
							<a href='webPages/animations.html'>
								<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='animations' />
								<div className='categoryImage'></div>
								<h2 className='pt-4'>3D Animation</h2>
							</a>
						</div>
						<div className='col-md-6 my-5 px-0'>
							<a href='webPages/architecture.html'>
								<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='architecture' />
								<div className='categoryImage'></div>
								<h2 className='pt-4'>Architectural Design</h2>
							</a>
						</div>
					</div>
				</div>
				<div className='container text-center second2categories'>
					<div className='row align-items-center'>
						<div className='col-md-6 my-5 px-0'>
							<a href='webPages/3dPrinting.html'>
								<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='3D printing' />
								<div className='categoryImage'></div>
								<h2 className='pt-4'>3D Printing</h2>
							</a>
						</div>
						<div className='col-md-6 my-5 px-0'>
							<a href='webPages/industrialDesigns.html'>
								<img src='../public/images/websiteImages/goldenTornado.webp' style={{ width: '100%' }} alt='industrial design' />
								<div className='categoryImage'></div>
								<h2 className='pt-4'>Industrial Design</h2>
							</a>
						</div>
					</div>
				</div>
			</div> */}

			{/* <!-- Footer ***************************************************** --> */}
			{/* <div id='footer'>
				<h2>william.lawrence@browardschools.com</h2>
				<h3>281-330-8004</h3>
			</div> */}

			<Footer />
		</>
	);
}

export default App;

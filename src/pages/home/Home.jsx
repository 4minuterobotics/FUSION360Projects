/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { HeroHomepage, CategoriesHomePage } from '../../containers';

export default function Home(props) {
	return (
		<>
			<HeroHomepage teacher={props.classInfo.teacher} websiteSlogan={props.classInfo.websiteSlogan} />
			<CategoriesHomePage classMaterial={props.classMaterial} />
		</>
	);
}

import { studentWork, websiteImages } from '../../public';

export let classInfo = {
	teacher: 'Mr. Lawrence',
	className: 'Fusion 360',
	websiteSlogan: 'Explore the Visionary Projects of Future Designers.',
};

export let classMaterial = [
	{
		category: 'Architectural Design',
		id: 'architecturalDesignCategories',
		link: '/architecturalDesign',
		description:
			'In these projects, students gain experience creating realistic 3D renderings of architectural designs to visualize buildings, interiors, and landscapes before construction.',
		displayImage: websiteImages,
		classOf2025: {
			categories: [
				{
					name: 'Urban Planning',
					id: 'urbanPlanning',
					categoryDescription: 'Neighborhood Design Projects',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
				{
					name: 'Stadium Architecture',
					id: 'stadiumArchitecture',
					categoryDescription: 'short description of the project',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
				{
					name: 'Attraction Design',
					id: 'attractionDesign',
					categoryDescription: 'short description of the project',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
			],
		},
	},
	{
		category: '3D Printing',
		id: 'threeDPrintingCategories',
		link: '/threeDPrinting',
		displayImage: websiteImages,
		classOf2025: {
			categories: [
				{
					name: 'Keychain Pendants',
					id: 'keychainPendants',
					categoryDescription: 'short description of the project',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
				{
					name: 'Personal Project',
					id: 'personalProject',
					categoryDescription: 'short description of the project',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
			],
		},
	},
	{
		category: 'Industrial Design',
		id: 'industrialDesignCategories',
		link: '/industrialDesign',
		displayImage: websiteImages,
		classOf2025: {
			categories: [
				{
					name: 'Mechanical CAD Engineering',
					id: 'mechanicalCADEngineering',
					categoryDescription: 'short description of the project',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
				{
					name: 'Product Design',
					id: 'productDesign',
					categoryDescription: 'short description of the project',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
			],
		},
	},
	{
		category: '3D Animation',
		id: 'threeDAnimationCategories',
		link: '/threeDAnimation',
		displayImage: websiteImages,
		classOf2025: {
			categories: [
				{
					name: 'Assembly Explosion',
					id: 'assemblyExplosion',
					categoryDescription: 'short description of the project',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
				{
					name: 'Car Race',
					id: 'carRace',
					categoryDescription: 'short description of the project',
					displayImage: websiteImages,
					projects: [
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
						{
							author: 'First Last',
							description: 'short description of the project',
							screenshot: studentWork,
							url: 'www.autodesk.com',
						},
					],
				},
			],
		},
	},
];

// Extract the categories and export them directly
export let categories = classMaterial.map((material) => material.category);

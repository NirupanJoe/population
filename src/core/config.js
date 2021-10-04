const config = {
	tableTitle: [
		'Location',
		'TotalPopulation',
		'MalePopulation',
		'FemalePopulation',
	],
	inputs: {
		location: {
			type: 'text',
			label: 'Location',
		},
		malePopulation: {
			type: 'number',
			label: 'MalePopulation',
		},
		femalePopulation: {
			type: 'number',
			label: 'FemalePopulation',
		},
		totalPopulation: {
			type: 'number',
			label: 'TotalPopulation',
		},
	},
	localhostURL: 'http://localhost:5500/population',
};

export default config;

const config = {
	tableTitle: [
		'Location',
		'TotalPopulation',
		'MalePopulation',
		'FemalePopulation',
	],
	input: [
		{
			name: 'Location',
			type: 'text',
		},
		{
			name: 'MalePopulation',
			type: 'number',
		},
		{
			name: 'FemalePopulation',
			type: 'number',
		},
		{
			name: 'TotalPopulation',
			type: 'number',
		},
	],
	localhostURL: 'http://localhost:5500/population',
};

export default config;

import Population from '../services/populationService';

const setLocation = ({ data }) => ({
	location: data,
});

const addPopulation = (context) => ({
	// TODO: Remove the unnecessary array.
	populations: Population.addPopulation({ ...context, data: [context.data] }),
	location: '',
	totalPopulation: '',
	malePopulation: '',
	femalePopulation: '',
});

const setTotalPopulation = ({ data }) => ({
	totalPopulation: data,
});

const setMalePopulation = ({ data }) => ({
	malePopulation: data,
});

const setFemalePopulation = ({ data }) => ({
	femalePopulation: data,
});

const updatePopulation = ({ data }) => ({
	populations: data,
});

const removePopulation = (context) => ({
	populations: Population
		.removePopulation({ ...context, data: context.data }),
});

const actions = {
	setLocation,
	addPopulation,
	setTotalPopulation,
	setMalePopulation,
	setFemalePopulation,
	updatePopulation,
	removePopulation,
};

export default actions;

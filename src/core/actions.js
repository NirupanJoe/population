import Population from '../services/populationService';

const setLocation = ({ data }) => ({
	location: data,
});

const addPopulation = (context) => ({
	populations: Population.addPopulation(context),
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
		.removePopulation(context),
});

const resetInput = () => ({
	location: '',
	totalPopulation: '',
	malePopulation: '',
	femalePopulation: '',
});

const actions = {
	setLocation,
	addPopulation,
	setTotalPopulation,
	setMalePopulation,
	setFemalePopulation,
	updatePopulation,
	removePopulation,
	resetInput,
};

export default actions;

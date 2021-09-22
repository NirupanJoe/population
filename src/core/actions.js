import Population from '../services/populationService';

const LocationInput = ({ data }) => ({
	location: data,
});

const AddPopulation = (context) => ({
	population: Population.addPopulation(context),
	location: '',
	totalPopulation: '',
	malePopulation: '',
});

const TotalPopulationInput = ({ data }) => ({
	totalPopulation: data,
});

const MalePopulationInput = ({ data }) => ({
	malePopulation: data,
});

const actions = {
	LocationInput,
	AddPopulation,
	TotalPopulationInput,
	MalePopulationInput,
};

export default actions;

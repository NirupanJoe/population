import Population from '../services/populationService';

const LocationInput = ({ data }) => ({
	location: data,
});

const AddPopulation = (context) => ({
	populations: Population.addPopulation({ ...context, data: [context.data] }),
	location: '',
	totalPopulation: '',
	malePopulation: '',
	femalePopulation: '',
});

const TotalPopulationInput = ({ data }) => ({
	totalPopulation: data,
});

const MalePopulationInput = ({ data }) => ({
	malePopulation: data,
});

const FemalePopulationInput = ({ data }) => ({
	femalePopulation: data,
});

const UpdatePopulation = ({ data }) => ({
	populations: data,
});

const actions = {
	LocationInput,
	AddPopulation,
	TotalPopulationInput,
	MalePopulationInput,
	FemalePopulationInput,
	UpdatePopulation,
};

export default actions;

import { React } from 'react';
import RemoveButton from './removeButton';

// eslint-disable-next-line max-lines-per-function
const PopulationTableBody = ({
	id, location, totalPopulation, malePopulation, femalePopulation,
}) =>
	<div key={ id } className="population" role="populationTableBody">
		<div
			className="attribute"
			role="location"
			data-name="Location"
		>{location}</div>
		<div
			className="attribute"
			role="totalPopulation"
			data-name="TotalPopulation"
		>{totalPopulation}</div>
		<div
			className="attribute"
			role="malePopulation"
			data-name="MalePopulation"
		>{malePopulation}</div>
		<div
			className="attribute"
			role="femalePopulation"
			data-name="FemalePopulation"
		>{femalePopulation}</div>
		<div
			className="attribute remove-population"
			role="removePopulation"
		>{RemoveButton(id)}</div>
	</div>;

export default PopulationTableBody;

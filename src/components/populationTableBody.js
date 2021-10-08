import { React } from 'react';
import RemoveButton from './removeButton';

const PopulationTableBody = ({
	id, location, totalPopulation, malePopulation, femalePopulation,
}) =>
	<div key={ id } className="population" role="populationTableBody">
		<div className="attribute" role="location">{location}</div>
		<div
			className="attribute"
			role="totalPopulation"
		>{totalPopulation}</div>
		<div className="attribute" role="malePopulation">{malePopulation}</div>
		<div
			className="attribute"
			role="femalePopulation"
		>{femalePopulation}</div>
		<div
			className="attribute"
			role="removePopulation"
		>{RemoveButton(id)}</div>
	</div>;

export default PopulationTableBody;

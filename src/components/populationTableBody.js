import { React } from 'react';

const PopulationTableBody = ({
	id, location, totalPopulation, malePopulation, femalePopulation,
}) =>
	<tr key={ id } role="populationTableBody">
		<td role="location">{location}</td>
		<td role="totalPopulation">{totalPopulation}</td>
		<td role="malePopulation">{malePopulation}</td>
		<td role="femalePopulation">{femalePopulation}</td>
	</tr>;

export default PopulationTableBody;
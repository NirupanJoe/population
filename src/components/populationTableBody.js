import { React } from 'react';
import PopulationBodyShell from './populationBodyShell';
import RemoveButton from './removeButton';

const PopulationTableBody = ({
	id, location, totalPopulation, malePopulation, femalePopulation,
}) =>
	<div key={ id } className="population" role="populationTableBody">
		{ PopulationBodyShell(location, 'location') }
		{ PopulationBodyShell(totalPopulation, 'totalPopulation') }
		{ PopulationBodyShell(malePopulation, 'malePopulation') }
		{ PopulationBodyShell(femalePopulation, 'femalePopulation') }
		{ RemoveButton(id) }
	</div>;

export default PopulationTableBody;

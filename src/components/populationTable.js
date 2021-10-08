import { React } from 'react';
import Container from './container';
import context from '../core/context';
import PopulationTableHead from './populationTableHead';
import PopulationTableBody from './populationTableBody';

const PopulationTable = () =>
	<div role="populationTable" className="population-table">
		<div role="populationTitle" className="population">
			{Container(context.config.tableTitle, PopulationTableHead)}
		</div>
		{Container(context.state.populations, PopulationTableBody)}
	</div>;

export default PopulationTable;

import { React } from 'react';
import Container from './container';
import context from '../core/context';
import PopulationTableHead from './populationTableHead';
import PopulationTableBody from './populationTableBody';

const PopulationTable = () =>
	<table role="populationTable">
		<thead role="tableHead">
			<tr role="tableTitle">
				{Container(context.config.tableTitle, PopulationTableHead)}
			</tr>
		</thead>
		<tbody role="tableBody">
			{Container(context.state.population, PopulationTableBody)}
		</tbody>
	</table>;

export default PopulationTable;

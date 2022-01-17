import { react, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard.js';
import { MatchSmallCard } from '../components/MatchSmallCard.js';
import { YearSelector } from '../components/YearSelector.js';

import './MatchPage.scss';

export const MatchPage = () => {
	
	const [matches, setMatches] = useState([]);
	const { teamName, year } = useParams();
	
	useEffect(
		() => {
			const fetchMatches = async () => {
				const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
				const data = await response.json();
				setMatches(data);
			};
			fetchMatches();
		}, [teamName, year]
	
	);
	
	return (
		<div className="MatchPage">
				<h3> Select Year </h3>
				<div className="year-selector">
				<YearSelector teamName={teamName}/>
			</div>
			<div>
				<h1>MatchPage</h1>
				{
					matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)
				}
			</div>
		</div>
	);
}
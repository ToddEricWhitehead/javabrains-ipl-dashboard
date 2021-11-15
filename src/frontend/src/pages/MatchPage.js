import { react, useEffect, useState } from 'react';
import { useParms } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard.js';
import { MatchSmallCard } from '../components/MatchSmallCard.js';

export const MatchPage = () => {
	
	const [matches, setMatches] = useState([]);
	const teamName = "Delhi Capitals";
	
	useEffect(
		() => {
			const fetchMatches = async () => {
				const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=2019`);
				const data = await response.json();
				setMatches(data);
			};
			fetchMatches();
		}, []
	
	);
	
	return (
		<div className="MatchPage">
			<h1>MatchPage</h1>
			{
				matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)
			}
		</div>
	);
}
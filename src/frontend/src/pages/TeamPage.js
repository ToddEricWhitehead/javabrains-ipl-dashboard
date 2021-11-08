import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard.js';
import { MatchSmallCard } from '../components/MatchSmallCard.js';

export const TeamPage = () => {
	
	const [team, setTeam] = useState({matches: []});
	const { teamName } = useParams();
	
	useEffect(
		() => {
			const fetchMatches = async () => {
				const response = await fetch(`http://localhost:8080/team/${teamName}`);
				const data = await response.json();
				console.log(data);

				setTeam(data);
			};
			fetchMatches();
			
		}, []
	);
	
	return (
		<div className="TeamPage">
			<h1>Rajasthan Royals - Big Dogs</h1>
			<h1>{team.teamName}</h1>
			<MatchDetailCard match={team.matches[0]}/>
			{team.matches.slice(1).map(match => <MatchSmallCard match={match}/>)}
		</div>
	)
}

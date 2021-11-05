import { React } from 'react';

export const MatchDetailCard = ({match}) => {
	if (!match) return (<div>!match -> match is null</div>);
	return (
		<div className="MatchDetailCard">
			<h3>Latest Matches</h3>
			<h4>Match Details</h4>
			<h4>{match.team1} vs {match.team2}</h4>
		</div>
	)
}
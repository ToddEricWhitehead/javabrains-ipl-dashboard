import { React } from 'react';

export const MatchSmallCard = ({match}) => {
	return (
		<div className="MatchSmallCard">
			<p>Match Small Card</p>
			<p>{match.team1} vs {match.team2} --> Winner : {match.matchWinner}</p>
		</div>
	)	
}
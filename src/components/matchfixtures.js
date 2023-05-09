import React from "react";
import "../index.css";

const MatchFixture = ({
  homeTeamLogo,
  homeTeamName,
  awayTeamLogo,
  awayTeamName,
}) => {
  return (
    <div className="match-fixture">
      <img className="team-logo" src={homeTeamLogo} alt={homeTeamName} />
      <span className="team-name">{homeTeamName}</span>
      <span className="vs">vs</span>
      <img className="team-logo" src={awayTeamLogo} alt={awayTeamName} />
      <span className="team-name">{awayTeamName}</span>
    </div>
  );
};

export default MatchFixture;

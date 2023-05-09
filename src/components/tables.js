import React from "react";
import "../index.css";
import MatchFixture from "./matchfixtures";

const Table = () => {
  const data = [
    {
      date: "2023-05-10",
      homeAway: "Home",
      awayTeam: "Gor Mahia",
      awayLogo: "./assets/images/gor.png",
      stadium: "Ruaraka Stadium",
      tickets: "Available",
    },
    {
      date: "2023-05-12",
      homeAway: "Away",
      awayTeam: "Kariobangi Sharks",
      awayLogo: "./assets/images/shakes.png",
      stadium: "Nairobi City Stadium ",
      tickets: "Available",
    },
    {
      date: "2023-05-15",
      homeAway: "Away",
      awayTeam: "KCB S.C.",
      awayLogo: "./assets/images/kcb.png",
      stadium: "Nairobi City Stadium ",
      tickets: "Available",
    },
    {
      date: "2023-05-18",
      homeAway: "Home",
      awayTeam: "Posta Rangers",
      awayLogo: "./assets/images/posta.png",
      stadium: "Ruaraka Stadium ",
      tickets: "Available",
    },
    // Add more data rows as needed
  ];

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Date</th>
          <th>Home/Away</th>
          <th>{`   Match   `}</th>
          <th>Stadium</th>
          <th>Tickets</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row.homeAway}</td>
            <td>
              {" "}
              <MatchFixture
                homeTeamLogo={"./assets/images/tuskers.png"}
                homeTeamName={"Tusker FC"}
                awayTeamLogo={row.awayLogo}
                awayTeamName={row.awayTeam}
              />
            </td>
            <td>{row.stadium}</td>
            <td>{row.tickets}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

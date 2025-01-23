import userData  from "./userData.json";
import { useState } from "react";
// --------------------------------------ALLE VIEWS-------------
export function Dashboard() {
  return (
    <div>
      <div>
        <h3>Übersicht Sales</h3>
        <OverviewGoals />
      </div>
      <div>
        <h3>Aktuelles</h3>
        <News />
      </div>
      <div>
        <h3>Progress der Benefits</h3>
        <Progress />
      </div>
      <div>
        <h3>Erreichte Ziele</h3>
        <AchievedGoals />
      </div>
    </div>
  );
}
//-----------Schorsch-------------
// Greeting with first and last name
function News() {
  return <p>News</p>;
}

// current goal
function Progress() {
  return <p>Progress</p>;
}

//---------LEON----------
//Achieved Goals
function AchievedGoals() {
  const selectedUser = userData.find(user => user.uuid === "a6a3241d-b070-302a-92f9-bcddf06d35b5")
  return( 
  <div><p>Achieved Goals={selectedUser.goalsAchieved}</p>
  <div></div>


    
    </div>
  );
}
// Curent and achieved goals
function OverviewGoals() {
  const selectedUser = userData.find(user => user.uuid === "a6a3241d-b070-302a-92f9-bcddf06d35b5")
  return (
    <div>
        {selectedUser.totalGoals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
    </div>
  );
 }

import userData from "./userData.json";
import { useState } from "react";
// --------------------------------------ALLE VIEWS-------------
export function Dashboard() {
  const [currentUser, setCurrentUser] = useState(userData[0].first_name);
  const [currentGoal, setCurrentGoal] = useState(userData[0].currentGoal);
  console.log(userData);

  return (
    <div>
      <div>
        <h3>Übersicht Sales</h3>
        <OverviewGoals />
      </div>
      <div>
        <h3>Aktuelles</h3>
        <News currentUser={currentUser} />
      </div>
      <div>
        <h3>Progress der Benefits</h3>
        <Progress currentGoal={currentGoal} />
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
function News({ currentUser }) {
  return (
    <p>
      Hi{" "}
      <span>
        <i>{currentUser}</i>
      </span>
    </p>
  );
}

// current goal
function Progress({ currentGoal }) {
  return <p>{currentGoal}</p>;
}

//---------LEON----------
//Achieved Goals
function AchievedGoals() {
  const selectedUser = userData.find(
    (user) => user.uuid === "a6a3241d-b070-302a-92f9-bcddf06d35b5"
  );
  return (
    <div>
      <p>Achieved Goals={selectedUser.goalsAchieved}</p>
      <div></div>
    </div>
  );
}
// Curent and achieved goals
function OverviewGoals() {
  const selectedUser = userData.find(
    (user) => user.uuid === "a6a3241d-b070-302a-92f9-bcddf06d35b5"
  );
  return (
    <div>
      {selectedUser.totalGoals.map((goal, index) => (
        <li key={index}>{goal}</li>
      ))}
    </div>
  );
}

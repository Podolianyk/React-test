import data from "../officers.json";
import OfficerList from "./OfficerList";

// const firstOfficer = {
//   id: 1,
//   name: "Jacob Mercer",
//   rank: "Commander",
//   age: 42,
//   yearsOfService: 10,
//   specialization: "Fighter Pilot",
//   awards: ["Starfleet Medal of Honor", "Distinguished Service Cross"],
//   skills: ["Combat Maneuvers", "Navigation", "Strategic Planning"],
//   status: "Active",
//   missionHistory: [
//     "Operation Red Comet - Battle of Orion Nebula",
//     "Operation Blackout - Stealth Reconnaissance",
//     "Operation Phoenix - Search and Rescue",
//   ],
// };
// const secondOfficer = {
//   id: 2,
//   name: "Adrian Cross",
//   rank: "Lieutenant",
//   age: 35,
//   yearsOfService: 7,
//   specialization: "Reconnaissance",
//   awards: ["Silver Star", "Meritorious Service Medal"],
//   skills: ["Stealth Operations", "Surveillance", "Data Analysis"],
//   status: "Active",
//   missionHistory: [
//     "Operation Deep Space - Exploration Mission",
//     "Operation Shadowfall - Covert Surveillance",
//     "Operation Stardust - Intelligence Gathering",
//   ],
// };

// const isModalOpen = false;

export default function App() {
  return (
    <>
      <h1>Available officers</h1>
      <OfficerList officers={data} />
    </>
  );
}

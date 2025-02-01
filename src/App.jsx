import { useState, useEffect } from "react";
import "./App.css";

const partyLevel = [
  "standing still",
  "standing vibing",
  "standing vibing and looking at you",
  "dancing at the bar",
  "one small group on the dance floor",
  "one group and a few singles on the dance floor",
  "few groups on the dance floor",
  "dance floor is medium filled",
  "dance floor is well filled",
  "dance floor is cramped",
  "everybody even at the bar is dancing",
  "they dance everywhere, around you and on the bar",
];

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let number = Math.random();
      if (number < 0.5 && currentLevel < 11) {
        setCurrentLevel(currentLevel + 1);
      } else if (number >= 0.5 && currentLevel > 0) {
        setCurrentLevel(currentLevel - 1);
      } else {
        if (currentLevel == 11) {
          setCurrentLevel(10);
        } else {
          setCurrentLevel(1);
        }
      }
    }, 300000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [currentLevel]);

  return (
    <>
      <div>
        <h1>{partyLevel[currentLevel]}</h1>
      </div>
    </>
  );
}

export default App;

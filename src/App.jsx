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
  const [timeStep, setTimeStep] = useState(5);
  const [settingsOpen, setSettingsOpen] = useState(false);

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
    }, timeStep * 1000 * 60);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [currentLevel, timeStep]);

  const openSettings = () => {
    setSettingsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    setTimeStep(formJson.timeStep);
    setSettingsOpen(false);
  };

  var settingsClassName = settingsOpen
    ? "settings-container card"
    : "settings-container hidden";

  return (
    <>
      <div className="settings-button">
        <button className="logo" onClick={openSettings}>
          Settings
        </button>
      </div>
      <div className={settingsClassName}>
        <form onSubmit={handleSubmit}>
          <label>
            Time interval (min):{" "}
            <input
              type="number"
              name="timeStep"
              min="1"
              defaultValue={timeStep}
            />
          </label>
          <hr />
          <button type="submit" className="logo">
            OK!
          </button>
        </form>
      </div>
      <div></div>
      <div className="text-container">
        <h1>{partyLevel[currentLevel]}</h1>
      </div>
    </>
  );
}

export default App;

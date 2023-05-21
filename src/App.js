import { useState } from "react";
import "./App.css";

function App() {
  const [circles, setCircles] = useState([]);
  const [savedCircles, setSavedCircles] = useState([]);

  const draw = (e) => {
    const { clientX, clientY } = e;
    setCircles([...circles, { x: clientX, y: clientY }]);
  };

  const handleRedo = () => {
    const newSavedCircles = [...savedCircles];
    const lastSavedCircles = newSavedCircles.pop();
    setSavedCircles(newSavedCircles);
    setCircles([...circles, lastSavedCircles]);
  };

  const handleUndo = () => {
    const newCircles = [...circles];
    const lastCircle = newCircles.pop();
    setSavedCircles([...savedCircles, lastCircle]);
    setCircles(newCircles);
  };

  return (
    <div className="App">
      <button onClick={handleRedo}>redo</button>
      <button onClick={handleUndo}>undo</button>
      <div className="paint-display" onClick={draw}>
        {circles.map((circle, i) => (
          <div
            className="circle"
            key={i}
            style={{ left: circle.x, top: circle.y }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;

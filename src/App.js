import "./App.css";
import React from "react";

function App() {
  const [scale, setScale] = React.useState(0.02);
  const [size, setSize] = React.useState(1000);
  return (
    <div className="App">
      <div className="layer-container">
        {new Array(1).fill(0).map((_, i) => (
          <div
            className="layer"
            style={{
              transform: `scale(${scale}) translateX(${i * 100}px)`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
        ))}
        <div className="legend">
          <div>size: {Math.round(size)}px</div>
          <div>scale: {Math.round(scale * 1000) / 1000}</div>
        </div>
      </div>
      <div className="buttons-container">
        <div style={{ display: "flex" }} className="buttons">
          <button onClick={() => setScale((scale) => scale * 1.1)}>
            scale +
          </button>
          <button onClick={() => setScale((scale) => scale * 0.9)}>
            scale -
          </button>
        </div>
        <div style={{ display: "flex" }} className="buttons">
          <button onClick={() => setSize((size) => size * 1.5)}>size +</button>
          <button onClick={() => setSize((size) => size * 0.5)}>size -</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello, React 👋</h1>
      <p>This is your first React app.</p>
    </div>
  );
}

// Render App to HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
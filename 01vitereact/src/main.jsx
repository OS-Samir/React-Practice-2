import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { jsx as _jsx } from "react/jsx-runtime.js";

function MyApp() {
  return (
    <div>
      <h1>Custome App</h1>
    </div>
  );
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'CLick me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Click to visit google{" "}
  </a>
);

const anotherUser = "chai aur react";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",

  anotherElement
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  reactElement
);

import React from "react";
import { createRoot } from "react-dom/client";

const myName = "Davi Fernandes";
const myAge = 24;

createRoot(document.getElementById("root")).render(
  <div>
    {myName} {myAge}
  </div>
);

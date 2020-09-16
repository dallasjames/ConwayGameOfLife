import React from "react";

export default function RulesContainer() {
console.log("re-renders");
return (
    <div className="rules_container">
    <h1>Rules of the Game:</h1>
    <ol>
        <li>
        Any live cell with two or three live neighbours survives.
        </li>
        <li>
        Any dead cell with three live neighbours becomes a live cell.
        </li>
        <li>
        All other live cells die in the next generation. Similarly, all other dead cells stay dead.
        </li>
    </ol>
    </div>
);
}

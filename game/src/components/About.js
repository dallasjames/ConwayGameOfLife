import React from "react";

export default function About() {
  console.log("re-renders");
  return (
    <div className="about_section">
      <p>
        Check out my blog post which explains how it works under the hood:{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://medium.com/@jjsincorporated/how-i-built-conways-game-of-life-with-react-hooks-3bc6c2734aa/"
        >
          How I built Conway's Game of Life with React Hooks
        </a>
      </p>

      
      <p>
        Learn more about Conway's Game of Life:{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
        >
          Conway's Game of Life Wikipedia
        </a>
      </p>
    </div>
  );
}
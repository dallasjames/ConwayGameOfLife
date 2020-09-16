import React from "react";

export default React.memo(
  function DefaultGridsContainer({
    setDefaultGrid,
    createRandomGrid,
    setGridSize,
    clickable
  }) {
    
    return (
      <div className="default_grids_container">
        <button value="Clear Grid" onClick={clickable ? setDefaultGrid : null}>
          Clear Grid
        </button>
        <button
          value="Default Grid 1"
          onClick={clickable ? setDefaultGrid : null}
        >
          Default 15x15 Grid 1
        </button>
        <button
          value="Default Grid 2"
          onClick={clickable ? setDefaultGrid : null}
        >
          Default 15x15 Grid 2
        </button>
        <button
          value="Default Grid 3"
          onClick={clickable ? setDefaultGrid : null}
        >
          Default 15x15 Grid 3
        </button>
        <button
          onClick={
            clickable
              ? () => {
                  setGridSize(15);
                  createRandomGrid(15);
                }
              : null
          }
        >
          Random 15x15 Grid
        </button>
        <button
          onClick={
            clickable
              ? () => {
                  setGridSize(30);
                  createRandomGrid(30);
                }
              : null
          }
        >
          Random 30x30 Grid
        </button>
        <button
          onClick={
            clickable
              ? () => {
                  setGridSize(50);
                  createRandomGrid(50);
                }
              : null
          }
        >
          Random 50x50 Grid
        </button>
      </div>
    );
  },
  // (prevProps, newProps) =>
  //   prevProps.setDefaultGrid === newProps.setDefaultGrid &&
  //   prevProps.createRandomGrid === newProps.createRandomGrid &&
  //   prevProps.setGridSize === newProps.setGridSize &&
  //   prevProps.clickable === newProps.clickable
);
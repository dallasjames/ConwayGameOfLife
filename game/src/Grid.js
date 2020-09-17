import React, { useCallback, useEffect, useRef, useState } from "react";
import produce from "immer";
import { SampleGrid1, SampleGrid2, SampleGrid3 } from "./templates"
import './App.css';

const numRows = 25;
const numCols = 25;

const ops = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
]

const clearGrid = () => {
    const rows = []
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows
}

function Grid() {
    const [grid, setGrid] = useState(() => {
        return clearGrid()
    });

    const [running, setRunning] = useState(false)

    const runningRef = useRef()
    runningRef.current = running

    const [generation, setGeneration] = useState(0)

    const [colorLiving, setColorLiving] = useState('black')

    const [colorDead, setColorDead] = useState('white')

    const runSim = () => {
        if (!runningRef.current) {
            return
        }
        setGrid((g) => {
            return produce(g, gridCopy => {
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        let neighbors = 0
                        ops.forEach(([x, y]) => {
                            const newI = i + x
                            const newJ = j + y
                            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                                neighbors += g[newI][newJ]
                            }
                        })
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0
                        } else if (g[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1
                        }
                    }
                }
            })
        })
        setGeneration(prevGen => prevGen + 1)
        setTimeout(runSim, 500)
    }

    console.log(generation)
    const Stepper = () => {
        setGrid((g) => {
            return produce(g, gridCopy => {
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        let neighbors = 0
                        ops.forEach(([x, y]) => {
                            const newI = i + x
                            const newJ = j + y
                            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                                neighbors += g[newI][newJ]
                            }
                        })
                    if (neighbors < 2 || neighbors > 3) {
                        gridCopy[i][j] = 0
                    } else if (g[i][j] === 0 && neighbors === 3) {
                        gridCopy[i][j] = 1
                    }
                    }
                }
            })
        })
        setGeneration(prevGen => prevGen + 1)
    }

    const handleChangeL = (e) => {
        setColorLiving(e.target.value)
    }

    const handleChangeD = (e) => {
        setColorDead(e.target.value)
    }

return (
    <div>
        <h1>Generation: {generation}</h1>
        <div className='buttons'>

            <button onClick={() => {
                setRunning(!running)
                if (!running) {
                    runningRef.current = true
                    runSim()
                }
                }}>
                {running ? `Stop` : `Start`}
            </button>
            <button onClick={Stepper}>
                One Step
            </button>
            <button 
            onClick={() => {
                setGrid(clearGrid())
                setGeneration(0)
                if (running) {
                    setRunning(!running)
                }
            }}
            >
                Clear
            </button>
            <button
            onClick={() => {
                const rows = []
                for (let i = 0; i < numRows; i++) {
                    rows.push(
                        Array.from(Array(numCols), () => Math.random() > .5 ? 1 : 0))
                }
                if (running) {
                    setRunning(!running)
                } 
                setGeneration(0)
                setGrid(rows)
            }}>
                Random
            </button>
            <button
            onClick={() => {
                if (running) {
                    setRunning(!running)
                }
                setGeneration(0)
                setGrid(SampleGrid1)
            }}
            >
                Big X
            </button>
            <button
            onClick={() => {
                if (running) {
                    setRunning(!running)
                }
                setGeneration(0)
                setGrid(SampleGrid2)
            }}
            >Windows 7 Logo
            </button>
            <button
            onClick={() => {
                if (running) {
                    setRunning(!running)
                }
                setGrid(SampleGrid3)
                setGeneration(0)
            }}
            >JSX Fragment</button>
        </div>
        <div className="colors">
            <form onSubmit={(e) => setColorLiving(e.value)}>
                <label>
                    Set Living Cell Color 
                    <select onChange={handleChangeL}>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                        <option value='yellow'>Yellow</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                    </select>
                </label>
            </form>
            <form onSubmit={(e) => setColorDead(e.value)}>
                <label>
                    Set Dead Cell Color 
                    <select onChange={handleChangeD}>
                        <option ty value='white'>White</option>
                        <option value='black'>Black</option>
                        <option value='yellow'>Yellow</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                    </select>
                </label>
            </form>
        </div>
        <div style={{
            display: `grid`,
            gridTemplateColumns: `repeat(${numCols}, 20px)`
        }}>
            {grid.map((rows, i) => 
                rows.map((col, j) => 
                <div 
                key={`${i}-${j}`}
                onClick={() => {
                    const newGrid = produce(grid, gridCopy => {
                        gridCopy[i][j] = grid[i][j] ? 0 : 1
                    })
                    if (!running) {
                        setGrid(newGrid)
                    }
                }}
                style={{
                    width: 20,
                    height: 20, backgroundColor: grid[i][j] ? `${colorLiving}` : `${colorDead}`,
                    border: grid[i][j] ? `solid .01px ${colorDead}` : `solid .01px ${colorLiving}`
                }}
                />
                ))
            }
        </div>
    </div>
);
}

export default Grid;
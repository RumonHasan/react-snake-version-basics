import React, {createContext, useState, useEffect} from 'react';
import './style.css';
import { gameboard } from './extras';
import Board from './components/Board';
import Snake from './components/Snake';

// primary game context
export const GameContext = createContext();

const App = () => {
  const [board, setBoard] = useState(gameboard);// board state
  const snake = [{
      row: 4,
      col: 4
  }]
  // initial board update
  const startGame = ()=>{
    const newBoard = [...board];
    addSnake(newBoard);
  };
  // adding snake to board frame
  const addSnake = (newBoard)=>{
    // assiging board sign matrix
    snake.forEach((singleSegment)=>{
        const {row, col} = singleSegment;
        newBoard[row][col] = <Snake/>
    })
    setBoard(newBoard);
  }

  return (
    <div>
        <button onClick={startGame}>Start Games</button>
        <GameContext.Provider value={{
            board, setBoard,
            snake
        }}>
            <Board/>
        </GameContext.Provider>
    </div>
  )
};

export default App;

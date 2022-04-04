import React, {createContext, useState, useEffect, useCallback} from 'react';
import './style.css';
import { gameboard, getRandomBoardPositions } from './extras';
import Board from './components/Board';
import Snake from './components/Snake';

// primary game context
export const GameContext = createContext();

const App = () => {
  let randomPosition = getRandomBoardPositions();
  // states
  const [board, setBoard] = useState(gameboard);// board state
  const [gameSpeed, setGamespeed] = useState(200); //game speed set in 200ms;
  const [gameOver, setGameover] = useState(false);// game state
  const [snake, setSnake] = useState([{
      row: randomPosition.row,
      col: randomPosition.col
  }]);
  const [directions, setDirections] = useState({
    row: 0,
    col: 0,
  });
 
  // initial board update
  const startGame = ()=>{
    setGameover(true);
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

  // controls
  useEffect(()=>{
    document.addEventListener('keydown', handleKeyControl);
    return (()=>{
      document.removeEventListener('keydown', handleKeyControl);
    })
  },[]);

  const handleKeyControl = useCallback((event)=>{
    switch(event.key){
      case 'ArrowRight':
        setDirections({...directions, row: 1});
        break;
      case 'ArrowUp':
        setDirections({...directions, col: -1});
        break;
      case 'ArrowDown':
        setDirections({...directions, col: 1});
        break;
      case 'ArrowLeft':
        setDirections({...directions, row: -1});
        break;
    }
  },[]);

   // main game loop
   useEffect(()=>{
    // temp game ending
    if(!gameOver) return;

    setInterval(()=>{
      moveSnake();
    },gameSpeed)
  },[gameOver])

  // moving the snake
  const moveSnake = ()=>{
    console.log(directions);
    snake[0].row += directions.row;
    snake[0].col += directions.col;
  }

  return (
    <div>
        {!gameOver && <button onClick={startGame}>Start Games</button>}
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

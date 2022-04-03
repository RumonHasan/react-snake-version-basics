import React,{useContext} from 'react';
import { GameContext } from '../App';
import Cell from './Cell';

const Board = () => {
  const {board} = useContext(GameContext);
  const gridLayout = []; // entire grid element

   // populating grid array in order to create the elements
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board.length; col++){
            gridLayout.push({
                row, 
                col
            })
        }
    };
  
  return (
    <div className='game-board'>
        {gridLayout.map((singleCell, index)=>{
            const {row, col} = singleCell;
            return (
                <div key={index}>
                    <Cell rowPosition={row} colPosition={col}/>
                </div>
            )
        })}
    </div>
  )
}

export default Board;

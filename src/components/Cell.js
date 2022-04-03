import React, {useContext} from 'react';
import { GameContext } from '../App';

const Cell = ({rowPosition, colPosition}) => {
    const {board} = useContext(GameContext);
    const snakeCell = board[rowPosition][colPosition];
    
    return (
        <div id='cell-container'>
            {snakeCell}
        </div>
    )
};

export default Cell;



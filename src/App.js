import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
};

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [player, changePlayer] = useState(PLAYER_1);
  // let [winner, checkWinner] = useState('');

  // Wave 2

  const checkForWinner = () => {
    let row = 0;
    let column = 0;
    // check for row match
    while (row < 3) {
      if (squares[row][0].value === squares[row][1].value 
        === squares[row][2].value && squares[row][0].value != '') {
        return squares[row][0].value;
      } 
      else row +=1;
    }
    // column check
    while (column < 3){
      if (squares[0][column].value === squares[1][column].value &&
        squares[2][column].value === squares[1][column].value && 
        squares[0][column].value != '') {
          return squares[0][column].value;
        }
        else column +=1;
    }
    // diagonal check
    if (squares[0][0].value === squares[1][1].value 
    === squares[2][2].value && squares[0][0] != '') {
      return squares[0][0].value;
    }
    else if (squares[0][2].value === squares[1][1].value
      === squares[2][0].value && squares[0][2] != '') {
        return squares[0][2].value;
      } return null;
  };

  const onClickCallback = (id) => {
    const square = squares.map((oneSquareArray) => {
      for (const insideSquare of oneSquareArray) {
        if (insideSquare.id === id) {
          insideSquare.value = player;
        }
      }
      return oneSquareArray;
    });
    
    if (player === PLAYER_1) {
      changePlayer(PLAYER_2);
    }
    else {
      changePlayer(PLAYER_1);
    }
    
    setSquares(square);
    // checkForWinner();
    console.log('WINNER CHECK', checkForWinner());
    
  };
  // const resetGame = () => {
    // Complete in Wave 4
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... {} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/> 
      </main>
    </div>
  );
};

export default App;

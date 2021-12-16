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
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [player, changePlayer] = useState(PLAYER_1);
  const [winner, checkWinner] = useState('');
  // Wave 2
  // According to the README, App needs a method to update state of the board
  // could be onClickCallback that is passed to Board
  const checkForWinner = () => {
    // console.log('squares',squares);
    let row = 0;
    let first = 0;
    let middle = 1;
    let last = 2;
    let column = 0;
    // // check for row match
    console.log('FIRST', squares[row][first].value);
    while (row <= 3) {
      if (squares[row][first].value === squares[row][middle].value 
        === squares[row][last].value && squares[row][first].value != '') {
        return squares[row][first].value;
      } 
      else row +=1, first +=1, last +=1, middle +=1;
    }
    // column check
    while (column <= 3){
      if (squares[0][column].value === squares[1][column].value 
        === squares[2][column].value && squares[0][column] != '') {
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
        return squares[0][2];
      }
      return '';
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
    checkWinner(checkForWinner());
    setSquares(square);
    
  };
  // const resetGame = () => {
    // Complete in Wave 4
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... {winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/> 
      </main>
    </div>
  );
};

export default App;

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
  console.log(squares);
  // Wave 2
  // According to the README, App needs a method to update state of the board
  // could be onClickCallback that is passed to Board
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
  };
  
  const checkForWinner = (squares) => {

    const ticTacToeHelper = (squares) = {
      let l = 0;
      for (arr of squares) {
        let arrSet = set(arr);
        if (arrSet.size === 1 && PLAYER_1 in arrSet) {
          return PLAYER_1;
        } else if (arrSet.size === 1 && PLAYER_2 in arrSet) {
          return PLAYER_2;
        } else if (arr[l] === squares[1][l] === squares[2][l]) {
          return arr[l];
        } else l += 1;
      } 
      if (squares[0][0] === squares[1][1] === squares [2][2]) {
        return squares[0][0];
      }
      
      if (squares[0][2] === squares[1][1] === squares[2][0]) {
        return squares[0][2];
      }
    }
    const ticTacToeWinner = (squares) => {
    let result = ticTacToeHelper(squares);
    if (!result) {
      let set1 = set(squares[0]);
      let set2 = set(squares[1]);
      let set3 = set(squares[2]);
      if (set1.size === set2.size === set3.size) {
        result = "Tie";
    }} return result;
    }

  
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if
    //    all three squares have the same value.
  };

  const resetGame = () => {
    // Complete in Wave 4
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/> 
      </main>
    </div>
  );
};

export default App;

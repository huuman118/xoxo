import { Map } from 'immutable';
import { inspect } from 'util';
import { readSync } from 'fs';

export const move = (player, coordinate) => {
  return {
    type: 'MOVE',
    player: player,
    position: coordinate,
  };
};

function winner(board) {
  if (
    board.getIn([0, 0]) === board.getIn([0, 1]) &&
    board.getIn([0, 0]) === board.getIn([0, 2])
  ) {
    return board.getIn(0, 0);
  }
  if (
    board.getIn([1, 0]) === board.getIn([1, 1]) &&
    board.getIn([1, 0]) === board.getIn([1, 2])
  ) {
    return board.getIn(1, 0);
  }
  if (
    board.getIn([2, 0]) === board.getIn([2, 1]) &&
    board.getIn([2, 0]) === board.getIn([2, 2])
  ) {
    return board.getIn(2, 0);
  }
  if (
    board.getIn([0, 0]) === board.getIn([1, 0]) &&
    board.getIn([0, 0]) === board.getIn([2, 0])
  ) {
    return board.getIn(0, 0);
  }
  if (
    board.getIn([0, 1]) === board.getIn([1, 1]) &&
    board.getIn([0, 1]) === board.getIn([2, 1])
  ) {
    return board.getIn(0, 1);
  }
  if (
    board.getIn([0, 2]) === board.getIn([1, 2]) &&
    board.getIn([0, 2]) === board.getIn([2, 2])
  ) {
    return board.getIn(0, 2);
  }
  if (
    board.getIn([0, 0]) === board.getIn([1, 1]) &&
    board.getIn([0, 0]) === board.getIn([2, 2])
  ) {
    return board.getIn(0, 1);
  }
  if (
    board.getIn([0, 2]) === board.getIn([1, 1]) &&
    board.getIn([2, 0]) === board.getIn([1, 1])
  ) {
    return board.getIn(0, 2);
  }
}

// function winner(board) {
//   for (let i = 0; i < 3; i++) {
//     if (
//       board.getIn([i, i]) === board.getIn([i + 1, i + 1]) &&
//       board.getIn([i, i]) === board.getIn([i + 2, i + 2])
//     ) {
//       return board.getIn([i, i]);
//     } else if (
//       board.getIn([i, i + 2]) === board.getIn([i + 1, i + 1]) &&
//       board.getIn([i, i + 2]) === board.getIn([i, i + 2])
//     ) {
//       return board.getIn([i, i]);
//     }
//     for (let j = 0; j < 3; j++) {
//       if (
//         board.getIn([i, j]) === board.getIn([i, j + 1]) &&
//         board.getIn([i, j]) === board.getIn([i, j + 2])
//       ) {
//         return board.getIn([i, j]);
//       } else if (
//         board.getIn([i, j]) === board.getIn([i + 1, j]) &&
//         board.getIn([i, j]) === board.getIn([i + 2, j])
//       ) {
//         return board.getIn([i, j]);
//       }
//     }
//   }
//   return null;
// }

const boardReducer = function(board = Map(), action) {
  switch (action.type) {
    case 'MOVE': {
      const newBoard = board.setIn(action.position, action.player);
      return newBoard;
    }
    default: {
      return board;
    }
  }
};

const turnReducer = function(turn = 'X', action) {
  return action.player === 'X' ? 'O' : 'X';
};

export default function(state = {}, action) {
  const wintext = winner(boardReducer(state.board, action));
  console.log(wintext);
  return {
    board: boardReducer(state.board, action),
    turn: turnReducer(state.turn, action),
  };
}

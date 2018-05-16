import { Map } from 'immutable';
import { inspect } from 'util';
const board = Map();

// const newBoard = board
//   .setIn([1, 1], '')
//   .setIn([1, 2], '')
//   .setIn([1, 3], '')
//   .setIn([2, 1], '')
//   .setIn([2, 2], '')
//   .setIn([2, 3], '')
//   .setIn([3, 1], '')
//   .setIn([3, 2], '')
//   .setIn([3, 3], '').setIn([3,4],'')

// const turnKeeper = (iteration) => {
//   if(itteration % 2) return 'X'
//   else return 'O'
// }

export const move = (player, coordinate) => {
  inspect(board);
  return {
    type: 'MOVE',
    player: player,
    position: coordinate,
  };
};

function winner(board) {
  for (let i = 0; i < 3; i++) {
    if (
      board.getIn([i, i]) === board.getIn([i + 1, i + 1]) &&
      board.getIn([i, i]) === board.getIn([i + 2, i + 2])
    ) {
      return board.getIn([i, i]);
    } else if (
      board.getIn([i, i + 2]) === board.getIn([i + 1, i + 1]) &&
      board.getIn([i, i + 2]) === board.getIn([i, i + 2])
    ) {
      return board.getIn([i, i]);
    }
    for (let j = 0; j < 3; j++) {
      if (
        board.getIn([i, j]) === board.getIn([i, j + 1]) &&
        board.getIn([i, j]) === board.getIn([i, j + 2])
      ) {
        return board.getIn([i, j]);
      } else if (
        board.getIn([i, j]) === board.getIn([i + 1, j]) &&
        board.getIn([i, j]) === board.getIn([i + 2, j])
      ) {
        return board.getIn([i, j]);
      }
    }
  }
  return null;
}

export default function(state = { turn: 'X', board: board }, action) {
  switch (action.type) {
    case 'MOVE': {
      const newBoard = state.board.setIn(action.position, action.player);
      const newplayer = action.player === 'X' ? 'O' : 'X';
      console.log(state.board.Map);
      return { turn: newplayer, board: newBoard };
    }
    default: {
      return state;
    }
  }
}

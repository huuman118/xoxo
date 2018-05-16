import { Map } from 'immutable';
import { inspect } from 'util';
const board = Map()

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
  inspect(board)
  return {
  type : "MOVE",
  player : player  ,
  position : coordinate
  }
}


export default function (state = { turn: 'X', board: board}, action) {
  const newBoard = state.board.set()
  return state;
}
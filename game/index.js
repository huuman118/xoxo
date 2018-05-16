import { Map } from 'immutable';
let board = Map();

board
  .setIn([1, 1], '')
  .setIn([1, 2], '')
  .setIn([1, 3], '')
  .setIn([2, 1], '')
  .setIn([2, 2], '')
  .setIn([2, 3], '')
  .setIn([3, 1], '')
  .setIn([3, 2], '')
  .setIn([3, 3], '');

export default function reducer(state = { turn: 'X', board: board }, action) {
  // TODO
  return state;
}

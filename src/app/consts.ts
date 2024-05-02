export enum TileName {
  ALIVE = '1',
  DEAD = '0',
}

export enum Operation {
  SET_ALIVE = 'SET_ALIVE',
  PLAY = 'PLAY',
  RESTART = 'RESTART',
}

//  zamieniono na IIFE generującą randomową tablice
//const BOARD = Array.from({ length: 42 }, () => Array(72).fill(0));
//export const EXAMPLE_BOARD = JSON.parse(JSON.stringify(BOARD));

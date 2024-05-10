import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  //public BOARD: any = Array.from({ length: 42 }, () => Array(72).fill(0));

  BOARD = (() => {
    const rows = 42;
    const cols = 72;
    const totalCells = rows * cols;
    const numOnes = 400;

    const board = Array.from({ length: rows }, () => Array(cols).fill(0));

    let count = 0;
    while (count < numOnes) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      if (board[randomRow][randomCol] === 0) {
        board[randomRow][randomCol] = 1;
        count++;
      }
    }

    return board;
  })();

  public NEW_BOARD: any = Array.from({ length: 42 }, () => Array(72).fill(0));
  public intervalId: any = undefined;
  private boardSubject: Subject<any> = new Subject<any>();
  public boardChanged = this.boardSubject.asObservable();
  public speed = 500;
  public getBoard() {
    return this.BOARD;
  }

  public resetBoard() {
    this.BOARD = Array.from({ length: 42 }, () => Array(72).fill(0));
    this.boardSubject.next(this.BOARD);
    return this.BOARD;
  }

  private move() {
    this.calculateAliveInNewArray();
    this.BOARD = this.NEW_BOARD.map((row: any) => row.slice());
    this.boardSubject.next(this.BOARD);
  }

  private calculateAliveInNewArray(): void {
    for (let i = 0; i < this.BOARD.length; i++) {
      for (let j = 0; j < this.BOARD[i].length; j++) {
        const aliveNeighbors = this.countAliveNeighbors(i, j);
        if (this.BOARD[i][j] === 1) {
          if (aliveNeighbors < 2 || aliveNeighbors > 3) {
            this.NEW_BOARD[i][j] = 0;
          } else {
            this.NEW_BOARD[i][j] = 1;
          }
        } else {
          if (aliveNeighbors === 3) {
            this.NEW_BOARD[i][j] = 1;
          } else {
            this.NEW_BOARD[i][j] = 0;
          }
        }
      }
    }
  }

  private countAliveNeighbors(x: number, y: number): number {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i !== 0 || j !== 0) {
          const newX = x + i;
          const newY = y + j;
          if (
            newX >= 0 &&
            newX < this.BOARD.length &&
            newY >= 0 &&
            newY < this.BOARD[x].length &&
            this.BOARD[newX][newY] === 1
          ) {
            count++;
          }
        }
      }
    }
    return count;
  }

  public startGame() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.move();
      }, this.speed);
    }
  }

  public stopGame() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public setSpeed(speed: number) {
    this.speed = speed;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.move();
      }, this.speed);
    }
  }
}

import { Component } from '@angular/core';
import { Operation } from '../consts';
import { CommonModule, NgIf } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, TileComponent, NgIf],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  public BOARD: any;
  constructor(private _gameService: GameService) {
    this.BOARD = _gameService.getBoard();
  }

  areAliveVisible = false;
  public currentOperation: Operation = Operation.SET_ALIVE;
  public buttonText = '';
  public isGameStarted = false;

  handleTileClick(x: number, y: number) {
    if (this.currentOperation === Operation.SET_ALIVE) {
      if (this.BOARD[x][y] === '0') {
        this.BOARD[x][y] = '1';
        this.areAliveVisible = true;
      } else if (this.BOARD[x][y] === '1') {
        this.BOARD[x][y] = '0';
      }
    } else if (this.currentOperation === Operation.RESTART) {
      this.BOARD = this._gameService.getBoard();
    }
    // if (this.currentOperation === Operation.SET_BALL) {
    //   if (this.BOARD[x][y] === '0') {
    //     this._bouncyService.setBallPosition(x, y);
    //     this.isBallVisible = true;
    //     this.currentOperation = Operation.SET_OBSTACLE;
    //   }
    // } else if (this.currentOperation === Operation.SET_OBSTACLE) {
    //   if (this.BOARD[x][y] === '0') {
    //     this.BOARD[x][y] = 'Y';
    //   } else if (this.BOARD[x][y] === 'Y') {
    //     this.BOARD[x][y] = '0';
    //   }
    // } else if (this.currentOperation === Operation.RESTART) {
    //   this.BOARD = this._bouncyService.getBoard();
    // }
  }

  handleOKButton() {
    if (this.areAliveVisible) {
      this.currentOperation = Operation.PLAY;
      this.isGameStarted = true;
      this._gameService.startGame();
    } else {
      alert('Set alive position');
    }
  }

  handleStopButton() {
    this.isGameStarted = false;
    this._gameService.stopGame();
    this.areAliveVisible = false;
    this.currentOperation = Operation.SET_ALIVE;
    this.BOARD = this._gameService.resetBoard();
  }
}

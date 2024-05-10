import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private _gameService: GameService) {}
  title = 'Game Of Life';

  handleSpeed(speed: number) {
    this._gameService.setSpeed(speed);
    console.log(speed);
  }
}

import { Component, Input } from '@angular/core';

import { Game } from '../model/game';

@Component({
  selector: 'game-detail',
  templateUrl: 'app/games-library/game-detail.component.html'
})

export class GameDetailComponent {
  @Input()  private game: Game;
}

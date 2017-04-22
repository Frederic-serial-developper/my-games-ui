import { Component, Input } from '@angular/core';

import { Game } from '../model/game';

@Component({
  selector: 'game-detail',
  templateUrl: 'app/game-detail/game-detail.component.html'
})

export class GameDetailComponent {
  @Input() game: Game;
}

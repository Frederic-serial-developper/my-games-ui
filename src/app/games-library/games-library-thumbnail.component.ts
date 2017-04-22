import { Component, Input } from '@angular/core';

import { Game } from '../model/game';

@Component({
  selector: 'games-library-thumbnail',
  templateUrl: 'app/games-library/games-library-thumbnail.component.html'
})
export class GamesLibraryThumbnailComponent {
  @Input() game: Game;
}

import { Component } from '@angular/core';

import { Game } from '../model/game';

@Component({
  selector: 'games-library',
  templateUrl: 'app/games-library/games-library.component.html'
})
export class GamesLibraryComponent {
  games: Game[] = [
    { id: 1, name: 'Abyss', rank: 3, source: 'boardgamegeek' },
    { id: 2, name: 'Scythe', rank: 5, source: 'boardgamegeek' },
    { id: 3, name: 'Mr. Jack', rank: 5, source: 'boardgamegeek' },
    { id: 4, name: 'Cyclades', rank: 4, source: 'boardgamegeek' },
    { id: 5, name: 'Sbires', rank: 3, source: 'boardgamegeek' }
  ];

  selectedGame: Game;

  onSelect(game: Game): void {
    console.log(game.name);
    this.selectedGame = game;
  }
}

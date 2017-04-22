import { Component, OnInit } from '@angular/core';

import { Game } from '../model/game';

import { GameLibraryService } from './games-library.service';

@Component({
  selector: 'games-library',
  templateUrl: 'app/games-library/games-library.component.html'
})
export class GamesLibraryComponent implements OnInit {
  games: Game[];

  selectedGame: Game;

  constructor(private gameLibrayService: GameLibraryService) {
  }

  ngOnInit(): void {
    this.gameLibrayService.getGamesSlowly().then(games => this.games = games);
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }
}

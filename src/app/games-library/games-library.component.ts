import { Component, OnInit } from '@angular/core';

import { Game } from '../model/game';

import { GameLibraryService } from './games-library.service';

@Component({
  selector: 'games-library',
  templateUrl: 'app/games-library/games-library.component.html'
})
export class GamesLibraryComponent implements OnInit {
  games: Game[];

  rankOrderAsc: number;
  nameOrderAsc: number;

  selectedGame: Game;

  constructor(private gameLibrayService: GameLibraryService) {
  }

  ngOnInit(): void {
    this.rankOrderAsc = 1;
    this.nameOrderAsc = 1;
    this.gameLibrayService.getGamesSlowly().then(games => this.games = games);
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  /*
  * sort the game list by name. Revert order each time it is called. On first call, games will be asc sorted.
  */
  sortByName(): void {
    this.games.sort((g1,g2)=> (g1.name.localeCompare(g2.name)) * this.nameOrderAsc);
    this.nameOrderAsc = this.nameOrderAsc * -1;
  }

  /*
  * sort the game list by rank. Revert order each time it is called. On first call, games will be desc sorted.
  */
  sortByRank(): void {
    this.games.sort((g1,g2)=> (g2.rank - g1.rank) * this.rankOrderAsc);
    this.rankOrderAsc = this.rankOrderAsc * -1;
  }
}

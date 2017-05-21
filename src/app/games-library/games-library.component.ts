import { Component, OnInit } from '@angular/core';

import { Game } from '../model/game';

import { GameLibraryService } from './games-library.service';

@Component({
  selector: 'games-library',
  templateUrl: 'app/games-library/games-library.component.html'
})
export class GamesLibraryComponent implements OnInit {
  private bggUser: string;
  private games: Game[];
  private displayedGames: Game[];

  private loading: boolean;

  private includeExpansion: boolean;

  private online: boolean;
  private selectedService: string;
  private availableServices = [
    { value: 'https://my-games-services.herokuapp.com', viewValue: 'Heroku' },
    { value: 'http://localhost:8080/my-games-services', viewValue: 'Local' }
  ];

  private ratingOrderAsc: number;
  private nameOrderAsc: number;
  private playsOrderAsc: number;

  private defaultPlayerCountFilter: number;

  private selectedGame: Game;

  constructor(private gameLibrayService: GameLibraryService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.includeExpansion = true;
    this.ratingOrderAsc = 1;
    this.nameOrderAsc = -1;
    this.playsOrderAsc = 1;
    this.bggUser = "fredericdib";
    this.online = false;
    this.defaultPlayerCountFilter = 4;

    this.selectedService = 'https://my-games-services.herokuapp.com';
    
    this.reloadCollection(this.bggUser, null);
  }

  reloadCollection(bggUserForm: string, serviceForm: any): void {
    this.bggUser = bggUserForm;
    this.selectedService = serviceForm;
    this.loading = true;
    if (this.online) {
      this.gameLibrayService.getGames(this.bggUser, this.selectedService, this.includeExpansion).subscribe(receivedGames => this.onReceiveData(receivedGames));
    } else {
      this.gameLibrayService.getGamesFromFile().subscribe(receivedGames => this.onReceiveData(receivedGames));
    }
  }

  onReceiveData(receivedGames: Game[]) {
    this.games = receivedGames;
    this.games.sort((g1, g2) => (g1.name.localeCompare(g2.name)));
    this.filterByPlayersCount(this.defaultPlayerCountFilter);
    this.loading = false;
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  /*
  * sort the game list by name. Revert order each time it is called. On first call, games will be asc sorted.
  */
  sortByName(): void {
    this.games.sort((g1, g2) => (g1.name.localeCompare(g2.name)) * this.nameOrderAsc);
    this.displayedGames.sort((g1, g2) => (g1.name.localeCompare(g2.name)) * this.nameOrderAsc);
    this.nameOrderAsc = this.nameOrderAsc * -1;
  }

  /*
  * sort the game list by rate. Revert order each time it is called. On first call, games will be desc sorted.
  */
  sortByRating(): void {
    this.games.sort((g1, g2) => (g2.rating - g1.rating) * this.ratingOrderAsc);
    this.displayedGames.sort((g1, g2) => (g2.rating - g1.rating) * this.ratingOrderAsc);
    this.ratingOrderAsc = this.ratingOrderAsc * -1;
  }

  /*
  * sort the game list by plays. Revert order each time it is called. On first call, games will be desc sorted.
  */
  sortByPlays(): void {
    this.games.sort((g1, g2) => (
      ((g2.playsCount === undefined ? 0 : g2.playsCount) - (g1.playsCount === undefined ? 0 : g1.playsCount)) * this.playsOrderAsc));
    this.displayedGames.sort((g1, g2) => (
      ((g2.playsCount === undefined ? 0 : g2.playsCount) - (g1.playsCount === undefined ? 0 : g1.playsCount)) * this.playsOrderAsc));
    this.playsOrderAsc = this.playsOrderAsc * -1;
  }



  onSliderPlayerCountEvent(event: any): void {
    this.filterByPlayersCount(event.value);
  }

  filterByPlayersCount(count: number): void {
    this.displayedGames = this.games.filter(game => game.minPlayers <= count && count <= game.maxPlayers);
  }
}

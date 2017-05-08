import { Component, OnInit } from '@angular/core';

import { CollectionStatistics } from '../model/collectionStatistics';
import { CollectionStatisticsService } from './games-statistics.service';

@Component({
  selector: 'games-statistics',
  templateUrl: 'app/games-statistics/games-statistics.component.html'
})
export class GamesStatisticsComponent implements OnInit {
  bggUser: string;

  stats: CollectionStatistics;

  loading: boolean;

  online: boolean;

  constructor(private statsService: CollectionStatisticsService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.bggUser = "fredericdib";
    this.online = false;
    this.reloadStatistics(this.bggUser);
  }

  onReceiveData(receivedStats: CollectionStatistics) {
    this.stats = receivedStats;
    this.loading = false;
  }

  reloadStatistics(bggUserForm: string): void {
    this.bggUser = bggUserForm;
    this.loading = true;
    if (this.online) {
      this.statsService.getCollectionStatistics(this.bggUser).subscribe(receivedStats => this.onReceiveData(receivedStats));
    } else {
      this.statsService.getCollectionStatisticsFromFile().subscribe(receivedStats => this.onReceiveData(receivedStats));
    }
  }
}




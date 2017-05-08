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

  constructor(private statsService: CollectionStatisticsService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.bggUser = "fredericdib";
    this.reloadStatistics(this.bggUser);
  }

  onReceiveData(receivedStats: CollectionStatistics) {
    this.stats = receivedStats;
    this.loading = false;
  }

  reloadStatistics(bggUserForm: string): void {
    this.bggUser = bggUserForm;
    this.loading = true;
    this.statsService.getCollectionStatistics(this.bggUser).subscribe(receivedStats => this.onReceiveData(receivedStats));
  }
}




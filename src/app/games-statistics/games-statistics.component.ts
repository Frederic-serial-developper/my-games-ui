import { Component, OnInit } from '@angular/core';

import { CollectionStatistics } from '../model/collectionStatistics';
import { CollectionStatisticsService } from './games-statistics.service';

import { OnlineMenuParameters } from '../online-menu/onlineMenuParameters';

@Component({
  selector: 'games-statistics',
  templateUrl: 'app/games-statistics/games-statistics.component.html'
})
export class GamesStatisticsComponent implements OnInit {
  private stats: CollectionStatistics;

  private loading: boolean;

  constructor(private statsService: CollectionStatisticsService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.reload(null);
  }

  onReceiveData(receivedStats: CollectionStatistics) {
    this.stats = receivedStats;
    this.loading = false;
  }

  reload(parameter: OnlineMenuParameters): void {
    this.loading = true;
    if (parameter && parameter.bggUser && parameter.service) {
      this.statsService.getCollectionStatistics(parameter.bggUser, parameter.service, parameter.includeExpansion, parameter.includePreviouslyOwned).subscribe(receivedStats => this.onReceiveData(receivedStats));
    } else {
      this.statsService.getCollectionStatisticsFromFile().subscribe(receivedStats => this.onReceiveData(receivedStats));
    }
  }
}
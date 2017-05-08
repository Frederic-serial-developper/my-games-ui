import { Component, OnInit } from '@angular/core';

import { CollectionStatistics } from '../model/collectionStatistics';
import { CollectionStatisticsService } from './games-statistics.service';

@Component({
  selector: 'games-statistics',
  templateUrl: 'app/games-statistics/games-statistics.component.html'
})
export class GamesStatisticsComponent implements OnInit {

  stats: CollectionStatistics;

  constructor(private statsService: CollectionStatisticsService) {
  }
  ngOnInit(): void {
    this.statsService.getCollectionStatisticsFromFile().subscribe(receivedStats => this.stats = receivedStats);
  }

}

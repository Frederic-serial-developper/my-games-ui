import { Component, OnInit } from '@angular/core';

import { CollectionStatistics } from '../model/collectionStatistics';
import { CollectionStatisticsService } from './games-statistics.service';

@Component({
  selector: 'games-statistics',
  templateUrl: 'app/games-statistics/games-statistics.component.html'
})
export class GamesStatisticsComponent implements OnInit {
  private bggUser: string;

  private stats: CollectionStatistics;

  private loading: boolean;

  private online: boolean;
  private selectedService: string;
  private availableServices = [
    { value: 'https://my-games-services.herokuapp.com', viewValue: 'Heroku' },
    { value: 'http://localhost:8080/my-games-services', viewValue: 'Local' }
  ];

  constructor(private statsService: CollectionStatisticsService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.bggUser = "fredericdib";
    this.online = false;
    this.reloadStatistics(this.bggUser, null);
  }

  onReceiveData(receivedStats: CollectionStatistics) {
    this.stats = receivedStats;
    this.loading = false;
  }

  reloadStatistics(bggUserForm: string, serviceForm: any): void {
    this.bggUser = bggUserForm;
    this.selectedService = serviceForm;
    this.loading = true;
    if (this.online) {
      this.statsService.getCollectionStatistics(this.bggUser, this.selectedService).subscribe(receivedStats => this.onReceiveData(receivedStats));
    } else {
      this.statsService.getCollectionStatisticsFromFile().subscribe(receivedStats => this.onReceiveData(receivedStats));
    }
  }
}
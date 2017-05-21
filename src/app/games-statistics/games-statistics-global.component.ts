import { Component, Input } from '@angular/core';

import { CollectionStatistics } from '../model/collectionStatistics';

@Component({
  selector: 'games-statistics-global',
  templateUrl: 'app/games-statistics/games-statistics-global.component.html'
})
export class GamesStatisticsGlobalComponent {
  
  @Input() private stats: CollectionStatistics;

}
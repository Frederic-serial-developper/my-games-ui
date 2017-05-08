import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/RX';

import { CollectionStatistics } from '../model/collectionStatistics';

@Injectable()
export class CollectionStatisticsService {

    constructor(private http: Http) { }

    getCollectionStatisticsFromFile(): Observable<CollectionStatistics> {
        return this.http.get("app/games-statistics/collection-stats.json").map((response: Response) => {
            return <CollectionStatistics>response.json();
        }).catch(this.handleError);
    }

    getCollectionStatistics(bggUser: string): Observable<CollectionStatistics> {
        return this.http.get("http://localhost:8080/my-games-services/bgg/collection/" + bggUser + "/stats?includeExpansions=false").map((response: Response) => {
            return <CollectionStatistics>response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json());
    }

}

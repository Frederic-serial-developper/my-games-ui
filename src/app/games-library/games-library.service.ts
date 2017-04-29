import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/RX';

import { Game } from '../model/game';

@Injectable()
export class GameLibraryService {

    constructor(private http: Http) {}

    getGames(): Observable<Game[]> {
        return this.http.get("app/games-library/games.json").map((response: Response) => {
           return <Game[]>response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json());
    }

}

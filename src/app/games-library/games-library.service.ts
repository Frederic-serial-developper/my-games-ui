import { Injectable } from '@angular/core';

import { Game } from '../model/game';

@Injectable()
export class GameLibraryService {
    GAMES: Game[] = [
        { id: 1, name: 'Abyss', rank: 3, source: 'boardgamegeek' },
        { id: 2, name: 'Scythe', rank: 5, source: 'boardgamegeek' },
        { id: 3, name: 'Mr. Jack', rank: 5, source: 'boardgamegeek' },
        { id: 4, name: 'Cyclades', rank: 4, source: 'boardgamegeek' },
        { id: 5, name: 'Sbires', rank: 3, source: 'boardgamegeek' },
        { id: 5, name: 'Mare Nostrum', rank: 3, source: 'boardgamegeek' }
    ];

    getGames(): Promise<Game[]> {
        return Promise.resolve(this.GAMES);
    }

    getGamesSlowly(): Promise<Game[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getGames()), 2000);
        });
    }

}

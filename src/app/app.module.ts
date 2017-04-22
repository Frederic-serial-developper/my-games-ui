import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { GamesLibraryComponent } from './games-library/games-library.component';
import { GameLibraryService } from './games-library/games-library.service';

import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,
    GamesLibraryComponent,
    GameDetailComponent],
  bootstrap: [AppComponent],
  providers: [GameLibraryService]
})
export class AppModule { }

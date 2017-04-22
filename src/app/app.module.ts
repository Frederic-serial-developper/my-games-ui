import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { GamesLibraryComponent } from './games-library/games-library.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,
    GamesLibraryComponent,
    GameDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

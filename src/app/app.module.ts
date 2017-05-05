import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// material2
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

// app
import { AppComponent } from './app.component';

// app components & services
import { GamesLibraryComponent } from './games-library/games-library.component';
import { GamesLibraryThumbnailComponent } from './games-library/games-library-thumbnail.component';
import { GameDetailComponent } from './games-library/game-detail.component';
import { GameLibraryService } from './games-library/games-library.service';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule],
  declarations: [AppComponent,
    GamesLibraryComponent,
    GamesLibraryThumbnailComponent,
    GameDetailComponent],
  bootstrap: [AppComponent],
  providers: [GameLibraryService]
})
export class AppModule { }

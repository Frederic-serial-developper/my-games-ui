import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

// ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// material2
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdSliderModule, MdTooltipModule, MdProgressSpinnerModule } from '@angular/material';
import 'hammerjs';

// app
import { AppComponent } from './app.component';
// app components & services for library
import { GamesLibraryComponent } from './games-library/games-library.component';
import { GamesLibraryThumbnailComponent } from './games-library/games-library-thumbnail.component';
import { GameDetailComponent } from './games-library/game-detail.component';
import { GameLibraryService } from './games-library/games-library.service';
// app components & services for statistics
import { GamesStatisticsComponent } from './games-statistics/games-statistics.component';
import { CollectionStatisticsService } from './games-statistics/games-statistics.service';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'library',
        component: GamesLibraryComponent
      },
      {
        path: 'statistics',
        component: GamesStatisticsComponent
      },
      {
        path: '',
        redirectTo: '/library',
        pathMatch: 'full'
      },
    ]),
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdSliderModule, MdTooltipModule, MdProgressSpinnerModule],
  declarations: [AppComponent,
    GamesLibraryComponent,
    GamesLibraryThumbnailComponent,
    GameDetailComponent,
    GamesStatisticsComponent],
  bootstrap: [AppComponent],
  providers: [GameLibraryService, CollectionStatisticsService]
})
export class AppModule { }

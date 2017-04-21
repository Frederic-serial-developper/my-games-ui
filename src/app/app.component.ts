import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
})
export class AppComponent  {
  name = 'Angular';
  abyss:Game =  {
    id : 1,
    name : 'Abyss'
  };
}
export class Game {
  id: number;
  name: string;
}

import { Play } from '../model/play';

export class Game {
  id: number;
  name: string;
  source: string;
  rank: number;
  image: string;
  plays: Play[];
}

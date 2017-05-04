import { Play } from '../model/play';

export class Game {
  id: number;
  name: string;
  source: string;
  rating: number;
  image: string;
  playsCount: number;
  plays: Play[];
  year: number;
  minPlayers: number;
  maxPlayers: number;
  playingTime: number;
}

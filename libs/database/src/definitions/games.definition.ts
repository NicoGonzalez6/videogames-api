export interface Igames {
  id?: number;
  name: string;
  users_score: string;
  critics_score: string;
  release_date: string;
  image_url: string;
  description: string;
  game_type_id: number;
}

export interface IgetGamesResponse extends Igames {
  type?: string;
}

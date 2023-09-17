export type Anime = {
  id: Number;
  name: String;
};

export type AnimeInput = Omit<Anime, 'id'>;

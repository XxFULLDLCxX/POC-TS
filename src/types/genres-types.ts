export type Genre = {
  id: Number;
  name: String;
  animeId: Number;
};

export type GenreInput = Omit<Genre, 'id'>;

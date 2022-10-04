import { IFilmSuccessResponse } from "../types/FilmType";

export async function fetchFilms(): Promise<IFilmSuccessResponse> {
  const res = await fetch('https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10');
  const data: IFilmSuccessResponse = await res.json();

  if (data.films.length > 0){
    return Promise.resolve(data);
  }else{
    return Promise.reject(data)
  }
}
import { FC } from 'react';
import { IFilm } from '../../types/FilmType';

export interface IFilmProps {
  minDuration: number;
  data: IFilm;
}

export const Film: FC<IFilmProps> = ({
  data,
  minDuration = 5500,
}) => {
  if (minDuration <= 5500) {
    return <div />
  } else {
    return (
      <div>
        <p>{data.title} ({data.duration_seconds})</p>
        <p>{data.short_description}</p>
        <p>Rating: {data.rating}</p>
        <hr />
      </div>
    );

  }
};

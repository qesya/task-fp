export interface IFilmSuccessResponse {
  slug: string;
  genre: string;
  title: string;
  films: IFilm[];
}

export interface IFilmFailResponse {
  status: string;
  message: string;
}

export interface IFilm {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  long_description: string;
  rating: number;
  published_at: string;
  duration: string;
  duration_seconds: number;
  credits_start_seconds: number;
  partner_id: string;
  premiere_to: string;
  premiere_from: string;
  release_date: string;
  promoted: number;
  premiere_date_string: string;
  availability_regions: string[];
  unavailable_in_region: number;
  type: string;
  cover_art: Coverart[];
  trailers: Trailer[];
  production_logo: Productionlogo;
  banners: Banners;
  genres: Genre[];
  awards: any[];
  is_original: number;
  non_native_english: number;
  imdb_id: string;
  general_release: number;
  premiere: number;
  upcoming: number;
  pre_feature: number;
  featured: number;
  theatrical: number;
}

interface Genre {
  slug: string;
  label: string;
}

interface Banners {
  film_overview: Filmoverview[];
  film_title: Filmoverview[];
  landscape_poster: Filmoverview[];
  portrait_featured: Filmoverview[];
  red_carpet: Filmoverview[];
  web_featured: Webfeatured[];
  mobile_featured: Mobilefeatured[];
  mobile_film_overview: Mobilefeatured[];
  tv_featured: Mobilefeatured[];
  tv_film_list_preview: Mobilefeatured[];
}

interface Mobilefeatured {
  content_position: string;
  gradient_disabled: number;
  file: File;
  cloudinary_id: string;
  type: string;
}

interface Webfeatured {
  content_position: string;
  gradient_disabled: number;
  file: File;
  cloudinary_id: string;
}

interface Filmoverview {
  gradient_disabled: number;
  file: File;
  cloudinary_id: string;
}

interface Productionlogo {
  feature: Feature;
  trailer: Feature;
}

interface Feature {
  url: string;
  mime: string;
}

interface Trailer {
  id: string;
  mime: string;
  url: string;
  seek_time_type: string;
}

interface Coverart {
  is_primary: number;
  file: File;
  cloudinary_id: string;
}

interface File {
  path: string;
}
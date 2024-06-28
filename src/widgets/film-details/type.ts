export interface IFilmDetails {
    filmId: number;
    onClick?: (id?: number) => void;
}

export interface IFilms {
    [key: number]: any;
}
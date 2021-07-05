export interface MovieItem {
    Id: number;
    Name: string;
    Genres?: string;
    Synopsis?: string;
    LargePosterUrl?: string;
    [index: string]: any;
}

export interface State {
    loading: boolean;
    movies: MovieItem[];
}

export const state: State = {
    loading: false,
    movies: []
}
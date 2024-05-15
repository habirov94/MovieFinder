export interface IInfoCard {
    id?: number;
    name?: string;
    posterUrl?: string;
    country?: string;
    year?: number;
    description?: string;
    ratingKp?: number;
    ratingImdb?: number;
    genres?: Genres[];
    skeleton?: boolean;
}
interface Genres {
    name: string;
}
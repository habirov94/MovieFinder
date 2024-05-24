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
    onClick?: (id?: number) => void;
}
interface Genres {
    name: string;
}
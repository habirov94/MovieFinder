import {createGate} from "effector-react";
import {createStore, sample} from "effector";
import {fxMovieControllerFindOneV14} from "entities/movie-controller-find-one";
import {IFilms} from "./type";

export const FilmDetailsGate = createGate<number>()
export const $movieDetails = createStore<IFilms>({})

sample({
    clock: FilmDetailsGate.open,
    target: fxMovieControllerFindOneV14
})

sample({
    source: $movieDetails,
    clock: fxMovieControllerFindOneV14.doneData,
    fn: (movieDetails, filmDetails) => {
        //@ts-expect-error
        return {...movieDetails, [filmDetails.id]: filmDetails} //TODO разобраться с типизацией
    },
    target: $movieDetails
})

sample({
    source: $movieDetails,
    clock: FilmDetailsGate.close,
    fn: (movieDetails, movieId) => {
        let newInfo = {...movieDetails}
        delete newInfo[movieId]
        return newInfo
    },
    target: $movieDetails
})
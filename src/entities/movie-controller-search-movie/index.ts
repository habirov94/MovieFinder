import {createEffect, createStore, sample} from "effector";
import {SearchMovieResponseDtoV14} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";


export const fxMovieControllerSearchMovie = createEffect<any, SearchMovieResponseDtoV14>((name) => {
    return V14service.movieControllerSearchMovieV14({query: name}, {headers: apiKey})
})

export const $filmsListByName = createStore<SearchMovieResponseDtoV14 | null>(null)

sample({
    clock: fxMovieControllerSearchMovie.doneData,
    target: $filmsListByName,
})
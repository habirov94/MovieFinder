import {createEffect, createStore, sample} from "effector";
import {SearchMovieResponseDtoV14} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";
import {IfxMovieControllerFindManyByQueryParams} from "./types";


export const fxMovieControllerSearchMovie = createEffect<IfxMovieControllerFindManyByQueryParams, SearchMovieResponseDtoV14>(({query}) => {
    return V14service.movieControllerSearchMovieV14({query}, {headers: apiKey})
})

export const $filmsListByName = createStore<SearchMovieResponseDtoV14 | null>(null)

sample({
    clock: fxMovieControllerSearchMovie.doneData,
    target: $filmsListByName,
})
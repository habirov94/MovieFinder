import {createEffect, createStore, sample} from "effector";
import {MovieDtoV14} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";

export const fxMovieControllerFindOneV14 = createEffect<number | null, MovieDtoV14>((id) => {
    return V14service.movieControllerFindOneV14(id, {headers: apiKey})
})

export const $filmDetails = createStore<MovieDtoV14 | null>(null)

sample({
    clock: fxMovieControllerFindOneV14.doneData,
    target: $filmDetails
})
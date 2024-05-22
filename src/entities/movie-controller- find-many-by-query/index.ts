import {createEffect, createStore, sample} from "effector";
import {MovieDocsResponseDtoV14} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";


export const fxMovieControllerFindManyByQuery = createEffect<any, MovieDocsResponseDtoV14>((
    {
        ratingKp = null,
        year = null,
        genresName = null,
        countriesName = null
    }) => {
    return V14service.movieControllerFindManyByQueryV14(
        {
            //@ts-ignore
            "rating.kp": ratingKp,
            year,
            genresName,
            countriesName
        },
        {
            headers: apiKey
        }
    )
})

export const $filmsListByQuery = createStore<MovieDocsResponseDtoV14 | null>(null)

sample({
    clock: fxMovieControllerFindManyByQuery.doneData,
    target: $filmsListByQuery,
})
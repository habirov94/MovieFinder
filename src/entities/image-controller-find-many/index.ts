import {createEffect, createStore, sample} from "effector";
import {ImageDocsResponseDtoV14} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";

export const fxImageControllerFindMany = createEffect<string[], Promise<PromiseSettledResult<ImageDocsResponseDtoV14>[]>>(async (movieIds) => {
    return await Promise.allSettled(movieIds.map((movieId) => {
        return V14service.imageControllerFindManyV14(
            {
                movieId: [movieId]
            },
            {
                headers: apiKey
            })
    }))
})

export const $postersUrl = createStore<Promise<PromiseSettledResult<ImageDocsResponseDtoV14>[]> | null>(null)

sample({
    clock: fxImageControllerFindMany.doneData,
    target: $postersUrl
})
import {createEffect, createStore, sample} from "effector";
import {ImageDocsResponseDtoV14} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";

export const fxImageControllerFindMany = createEffect<string[], ImageDocsResponseDtoV14>(movieId => {
    return V14service.imageControllerFindManyV14(
            {
                limit: 250,
                movieId
            },
            {
                headers: apiKey
            })
})

export const $postersUrl = createStore<ImageDocsResponseDtoV14 | null>(null)

sample({
    clock: fxImageControllerFindMany.doneData,
    target: $postersUrl
})
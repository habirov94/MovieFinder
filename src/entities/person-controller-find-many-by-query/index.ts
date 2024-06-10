import {createEffect, createStore, sample} from "effector";
import {PersonDocsResponseDtoV14} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";

export const fxPersonControllerFindManyByQuery = createEffect<any, PersonDocsResponseDtoV14>(({
                                                                                           sex,
                                                                                           professionValue,
                                                                                           birthday,
                                                                                           age
                                                                                       }) => {
    return V14service.personControllerFindManyV14(
        {
            sex,
            //@ts-expect-error
            "profession.value": professionValue,
            birthday,
            age
        },
        {
            headers: apiKey
        })
})

export const $personListByQuery = createStore<PersonDocsResponseDtoV14 | null>(null)

sample({
    clock: fxPersonControllerFindManyByQuery.doneData,
    target: $personListByQuery
})
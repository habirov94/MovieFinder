import {createStore, sample, createEffect} from "effector";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";
import {SearchPersonResponseDtoV14} from "generate/data-contracts";
import {IfxPersonControllerSearchPerson} from "./types";

export const fxPersonControllerSearchPerson = createEffect<IfxPersonControllerSearchPerson, SearchPersonResponseDtoV14>(({query}) => {
    return V14service.personControllerSearchPersonV14({query},{headers: apiKey})
})

export const $valuesBySearchPerson = createStore<SearchPersonResponseDtoV14 | null>(null)

sample({
    clock: fxPersonControllerSearchPerson.doneData,
    target: $valuesBySearchPerson
})
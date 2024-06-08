import {createEffect, createStore, sample} from "effector";
import {Person} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";

export const fxPersonControllerFindOne = createEffect<number, Person>((id) => {
    return V14service.personControllerFindOneV14(id, {headers: apiKey})
})

export const $personDetails = createStore<Person | null>(null)

sample({
    clock: fxPersonControllerFindOne.doneData,
    target: $personDetails
})
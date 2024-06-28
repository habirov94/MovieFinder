import {createGate} from "effector-react";
import {createStore, sample} from "effector";
import {$personDetails, fxPersonControllerFindOne} from "entities/person-controller-find-one";
import {fxImageControllerFindMany} from "entities/image-controller-find-many";
import {IPerson} from "./type";

export const PersonDetailsGate = createGate<number>()
export const $filteredPostersUrl = createStore<null>(null)
export const $personInfo = createStore<IPerson>({})

sample({
    clock: PersonDetailsGate.open,
    target: fxPersonControllerFindOne
})

sample({
    //@ts-expect-error
    clock: fxPersonControllerFindOne.doneData,
    fn: (data) => {
        return data.movies?.slice(0, 6).map((movie) => movie.id)
    },
    target: fxImageControllerFindMany
})

sample({
    //@ts-expect-error
    clock: fxImageControllerFindMany.doneData,
    fn: (data) => {
        return data.docs.reduce((acc, moviePosterData) => {
            return {...acc, [moviePosterData.movieId]: moviePosterData.url}
        }, {})
    },
    target: $filteredPostersUrl
})

sample({
    source: $personInfo,
    clock: $personDetails.updates,
    fn: (personsInfo, personDetail) => {
        return personDetail ? {...personsInfo, [personDetail.id]: {...personDetail}} : personsInfo
    },
    target: $personInfo
})

sample({
    source: $personInfo,
    clock: PersonDetailsGate.close,
    fn: (personsInfo, personId) => {
        let newInfo = {...personsInfo}
        delete newInfo[personId]
        return newInfo
    },
    target: $personInfo
})
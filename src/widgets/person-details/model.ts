import {createGate} from "effector-react";
import {createStore, sample} from "effector";
import {fxPersonControllerFindOne} from "entities/person-controller-find-one";
import {fxImageControllerFindMany} from "entities/image-controller-find-many";

export const PersonDetailsGate = createGate<number>()
export const $filteredPostersUrl = createStore<null>(null)

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
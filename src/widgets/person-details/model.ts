import {createGate} from "effector-react";
import {sample} from "effector";
import {fxPersonControllerFindOne} from "entities/person-controller-find-one";
import {fxImageControllerFindMany} from "../../entities/image-controller-find-many";

export const PersonDetailsGate = createGate<number>()

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


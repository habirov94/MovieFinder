import {createGate} from "effector-react";
import {sample} from "effector";
import {fxPersonControllerFindOne} from "entities/person-controller-find-one";

export const PersonDetailsGate = createGate<number>()

sample({
    clock: PersonDetailsGate.open,
    target: fxPersonControllerFindOne
})
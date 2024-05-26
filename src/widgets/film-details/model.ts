import {createGate} from "effector-react";
import {sample} from "effector";
import {fxMovieControllerFindOneV14} from "entities/movie-controller-find-one";

export const FilmDetailsGate = createGate<number>()

sample({
    clock: FilmDetailsGate.open,
    target: fxMovieControllerFindOneV14
})
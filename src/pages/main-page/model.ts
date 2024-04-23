import {createGate} from "effector-react";
import {sample} from "effector";
import {fxMovieControllerSearchMovie} from "entities/movie-controller-search-movie";

export const MainPageGate = createGate()

sample({
    clock: MainPageGate.open,
    target: fxMovieControllerSearchMovie
})
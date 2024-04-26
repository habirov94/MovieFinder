import {createGate} from "effector-react";
import {sample} from "effector";
import {fxMovieControllerSearchMovie} from "entities/movie-controller-search-movie";
import {$searchForm} from "./form";

export const MainPageGate = createGate()

sample({
    source: $searchForm.$values,
    clock: $searchForm.formValidated,
    target: fxMovieControllerSearchMovie,
    fn: ({query}) => query
})
import {createStore, sample} from "effector";
import {AppDomain} from "app/domains/app-domain";
import {SearchMovieResponseDtoV14} from "generate/data-contracts";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";


export const fxMovieControllerSearchMovie = AppDomain.createEffect<any, SearchMovieResponseDtoV14>((name) => {
    return V14service.movieControllerSearchMovieV14({query: name}, {headers: apiKey})
})

const $filmsListByName = createStore<SearchMovieResponseDtoV14 | null>(null)


sample({
    // @ts-ignore
    clock: fxMovieControllerSearchMovie.doneData,
    target: $filmsListByName,
})
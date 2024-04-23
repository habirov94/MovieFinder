import {createStore, sample} from "effector";
import {AppDomain} from "app/domains/app-domain";
import {V14service} from "shared/api-instances";
import {apiKey} from "shared/constants";

export const fxMovieControllerSearchMovie = AppDomain.createEffect(() => {
    return V14service.movieControllerSearchMovieV14({query: "Мимино"}, {headers: apiKey})
})

const $filmsListByName = createStore(null)

sample({
    // @ts-ignore
    clock: fxMovieControllerSearchMovie.doneData,
    target: $filmsListByName,
    fn: (data) => data
})
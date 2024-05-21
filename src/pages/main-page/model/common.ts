import {createGate} from "effector-react";
import {sample} from "effector";
import {condition} from "patronum";
import {PossibleValueDto} from "generate/Api";
import {fxMovieControllerSearchMovie} from "entities/movie-controller-search-movie";
import {fxMovieControllerFindManyByQuery} from "entities/movie-controller- find-many-by-query";
import {getPossibleValuesByFieldNameFactory} from "entities/movie-controller-get-possible-values-by-field-name";
import {SEARCH_BY_NAME, SEARCH_BY_PARAMETERS} from "./constants";
import {$searchForm} from "./form";

export const genresFactory = getPossibleValuesByFieldNameFactory()
export const countryFactory = getPossibleValuesByFieldNameFactory()

export const MainPageGate = createGate()

export const $filmsGenres = genresFactory.$valuesByFieldName.map(
    (genres) => genres?.map(
        ({name = "", slug: value = ""}) => ({name, value})
    )
)

export const $filmsCountry = countryFactory.$valuesByFieldName.map(
    (countries) => countries?.map(
        ({name = "", slug: value = ""}) => ({name, value})
    )
)

condition({
    //@ts-ignore
    source: $searchForm.formValidated,
    if: ({searchType}) => searchType === SEARCH_BY_NAME,
    then: fxMovieControllerSearchMovie,
    else: fxMovieControllerFindManyByQuery,
})

sample({
    //@ts-ignore
    source: genresFactory.$valuesByFieldName,
    clock: $searchForm.fields.searchType.changed,
    target: genresFactory.fxMovieControllerGetPossibleValuesByFieldName,
    filter: (genreData: PossibleValueDto[] | null, searchTypeValue: string) => {
        return searchTypeValue === SEARCH_BY_PARAMETERS && !Boolean(genreData)
    },
    fn: () => ({field: "genres.name"})
})

sample({
    //@ts-ignore
    source: countryFactory.$valuesByFieldName,
    clock: $searchForm.fields.searchType.changed,
    target: countryFactory.fxMovieControllerGetPossibleValuesByFieldName,
    filter: (countryData: PossibleValueDto[] | null, searchTypeValue: string) => {
        return searchTypeValue === SEARCH_BY_PARAMETERS && !Boolean(countryData)
    },
    fn: () => ({field: "countries.name"})
})

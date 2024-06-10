import {createGate} from "effector-react";
import {createEvent, sample} from "effector";
import {condition} from "patronum";
import {PossibleValueDto} from "generate/Api";
import {$filmsListByName, fxMovieControllerSearchMovie} from "entities/movie-controller-search-movie";
import {$filmsListByQuery, fxMovieControllerFindManyByQuery} from "entities/movie-controller- find-many-by-query";
import {getPossibleValuesByFieldNameFactory} from "entities/movie-controller-get-possible-values-by-field-name";
import {SEARCH_BY_NAME, SEARCH_BY_PARAMETERS} from "./constants";
import {$searchForm} from "./form";
import {getSortedArray} from "./lib";

export const MainPageGate = createGate()

export const getMovies = createEvent('Запрашивает фильмы')

export const genresFactory = getPossibleValuesByFieldNameFactory()
export const countryFactory = getPossibleValuesByFieldNameFactory()

export const $filmsGenres = genresFactory.$valuesByFieldName.map(
    (genres) => genres?.map(
        ({name = ""}) => ({name, value: name})
    )
)
export const $filmsCountry = countryFactory.$valuesByFieldName.map(
    (countries) => countries?.map(
        ({name = ""}) => ({name, value: name})
    )
)

export const $sortedFilmsListByName = $filmsListByName.map((films) => {
    if (!films?.docs) return null
    return getSortedArray(films?.docs)
})

export const $sortedFilmsListByQuery = $filmsListByQuery.map((films) => {
    if (!films?.docs) return null
    return getSortedArray(films?.docs)
})

sample({
    clock: $searchForm.formValidated,
    target: getMovies,
    fn: (data) => ({...data, ratingKp: data.ratingKp.join('-')})
})

condition({
    //@ts-expect-error
    source: getMovies,
    if: ({searchType}) => searchType === SEARCH_BY_NAME,
    then: fxMovieControllerSearchMovie,
    else: fxMovieControllerFindManyByQuery,
})

sample({
    //@ts-expect-error
    source: genresFactory.$valuesByFieldName,
    clock: $searchForm.fields.searchType.changed,
    target: genresFactory.fxMovieControllerGetPossibleValuesByFieldName,
    filter: (genreData: PossibleValueDto[] | null, searchTypeValue: string) => {
        return searchTypeValue === SEARCH_BY_PARAMETERS && !Boolean(genreData)
    },
    fn: () => ({field: "genres.name"})
})

sample({
    //@ts-expect-error
    source: countryFactory.$valuesByFieldName,
    clock: $searchForm.fields.searchType.changed,
    target: countryFactory.fxMovieControllerGetPossibleValuesByFieldName,
    filter: (countryData: PossibleValueDto[] | null, searchTypeValue: string) => {
        return searchTypeValue === SEARCH_BY_PARAMETERS && !Boolean(countryData)
    },
    fn: () => ({field: "countries.name"})
})
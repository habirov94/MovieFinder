import {createStore, sample, createEffect} from "effector";
import {PossibleValueDto} from "generate/Api";
import {ApiService} from "shared/api-instances";
import {apiKey} from "shared/constants";
import {QueryType} from "./type";


export const getPossibleValuesByFieldNameFactory = () => {
    const fxMovieControllerGetPossibleValuesByFieldName = createEffect<QueryType, PossibleValueDto[]>(async (query) => {
        const response = await ApiService.v1.movieControllerGetPossibleValuesByFieldName(query, {headers: apiKey});
        return response.data; // Извлечение данных из ответа
    });

    const $valuesByFieldName = createStore<PossibleValueDto[] | null>(null)

    sample({
        clock: fxMovieControllerGetPossibleValuesByFieldName.doneData,
        target: $valuesByFieldName,
    })

    return {
        $valuesByFieldName,
        fxMovieControllerGetPossibleValuesByFieldName
    }
}
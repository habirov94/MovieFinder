import {createEvent, createStore, sample} from "effector";
import {createForm} from "effector-forms";
import {SEARCH_BY_NAME, searchSelectItemsNames} from "./constants";

export const onValidate = createEvent('Валидировать форму')

export const $selectItems = createStore(Object.keys(searchSelectItemsNames).map(key => ({
    value: key,
    // @ts-ignore
    name: searchSelectItemsNames[key]
})))

export const $searchForm = createForm({
    fields: {
        searchType: {
            init: SEARCH_BY_NAME,
        },
        query: {
            init: '',
            rules: [
                {
                    name: "query",
                    validator: (value, formValues) => {
                        return Boolean(value) || (formValues.searchType !== SEARCH_BY_NAME)
                    },
                    errorText: "Введите название фильма",
                }
            ]
        },
        ratingKp: {
            init: null,
        },
        year: {
            init: '',
        },
        genresName: {
            init: '',
        },
        countriesName: {
            init: '',
        },
    }
})

sample({
    // @ts-ignore
    clock: onValidate,
    target: $searchForm.validate
})
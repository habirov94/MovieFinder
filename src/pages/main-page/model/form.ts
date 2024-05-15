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
                    validator: (value) => Boolean(value),
                    errorText: "Введите название фильма",
                }
            ]
        }
    }
})

sample({
    // @ts-ignore
    clock: onValidate,
    target: $searchForm.validate
})
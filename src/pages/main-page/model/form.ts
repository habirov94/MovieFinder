import {createEvent, createStore, sample} from "effector";
import {createForm} from "effector-forms";
import {formErrorTexts, SEARCH_BY_NAME, searchSelectItemsNames} from "./constants";

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
                    errorText: formErrorTexts.queryErrorText,
                }
            ]
        },
        ratingKp: {
            init: [0, 10],
        },
        year: {
            init: '',
            rules: [
                {
                    name: "year",
                    validator: (value, formValues) => {
                        return Boolean(value) || (formValues.searchType === SEARCH_BY_NAME)
                    },
                    errorText: formErrorTexts.yearEmptyErrorText,
                },
                {
                    name: "year",
                    validator: (value, formValues) => {
                        const currentYear = new Date().getFullYear();
                        return (Number(value) >= 1895 && Number(value) <= currentYear) || (formValues.searchType === SEARCH_BY_NAME)
                    },
                    errorText: formErrorTexts.yearDateErrorText,
                }
            ]
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
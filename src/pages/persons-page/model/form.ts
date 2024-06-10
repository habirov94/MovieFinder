import {createEvent, createStore, sample} from "effector";
import {createForm} from "effector-forms";
import {
    personFormErrorTexts,
    personSearchSelectItemsNames,
    SEARCH_PERSON_BY_NAME
} from "./constants";
import {PersonSearchSelectItemsKeys} from "./types";

export const onValidate = createEvent('Валидировать форму')

export const $selectItems = createStore(Object.keys(personSearchSelectItemsNames).map(key => ({
    value: key,
    name: personSearchSelectItemsNames[key as PersonSearchSelectItemsKeys]
})))

export const $personSearchForm = createForm({
    fields: {
        searchType: {
            init: SEARCH_PERSON_BY_NAME,
        },
        query: {
            init: '',
            rules: [
                {
                    name: "query",
                    validator: (value, formValues) => {
                        return Boolean(value) || (formValues.searchType !== SEARCH_PERSON_BY_NAME)
                    },
                    errorText: personFormErrorTexts.queryErrorText,
                }
            ]
        },
        sex: {
            init: '',
        },
        professionValue: {
            init: '',
        },
        birthday: {
            init: '',
        },
        age: {
            init: '',
        },
    }
})

sample({
    // @ts-expect-error
    clock: onValidate,
    target: $personSearchForm.validate
})


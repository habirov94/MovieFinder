import {createEvent, sample} from "effector";
import {createGate} from "effector-react";
import {condition} from "patronum";
import {fxPersonControllerSearchPerson} from "entities/person-controller-search-person";
import {fxPersonControllerFindManyByQuery} from "entities/person-controller-find-many-by-query";
import {removeEmptyValues} from "shared/lib";
import {$personSearchForm} from "./form";
import {SEARCH_PERSON_BY_NAME} from "./constants";

export const PersonsPageGate = createGate()

export const getPersons = createEvent('Запрашивает актеров')

sample({
    clock: $personSearchForm.formValidated,
    target: getPersons,
    fn: (data) => {
        let payload = removeEmptyValues(data)
        if (payload.birthday) {
            const [year, month, day] = payload.birthday.split('-');
            return {...payload, birthday: `${day}.${month}.${year}`}
        }
        return payload
    }
})

condition({
    //@ts-expect-error
    source: getPersons,
    if: ({searchType}) => searchType === SEARCH_PERSON_BY_NAME,
    then: fxPersonControllerSearchPerson,
    else: fxPersonControllerFindManyByQuery,
})
import {sample} from "effector";
import {createGate} from "effector-react";
import {fxPersonControllerSearchPerson} from "entities/person-controller-search-person";
import {$personSearchForm} from "./form";



export const PersonsPageGate = createGate()

sample({
    clock: $personSearchForm.formValidated,
    target: fxPersonControllerSearchPerson,
})
import styled from "styled-components";
import {useUnit} from "effector-react";
import {useForm} from "effector-forms";
import {TextField} from "@mui/material";
import {Select} from "shared/ui";
import {$personSearchForm, professionValues, sex} from "../model";

import {fxPersonControllerSearchPerson} from "entities/person-controller-search-person";

export const PersonsSearchByParameterInputs = () => {
    const {fields} = useForm($personSearchForm)
    const personLoading = useUnit(fxPersonControllerSearchPerson.pending)

    return (
        <PersonsSearchByParameterInputsWrap>
            <TextField
                autoComplete="off"
                type="date"
                className="name-text-field"
                id="outlined-basic"
                label="Введите дату рождения"
                value={fields.birthday.value}
                onChange={(e) => fields.birthday.onChange(e.target.value)}
                error={!fields.birthday.isValid}
                helperText={fields.birthday.errorText()}
                disabled={personLoading}
            />
            <TextField
                autoComplete="off"
                type="number"
                className="name-text-field"
                id="outlined-basic"
                label="Введите возраст актера"
                value={fields.age.value}
                onChange={(e) => fields.age.onChange(e.target.value)}
                error={!fields.age.isValid}
                helperText={fields.age.errorText()}
                disabled={personLoading}
            />
            <Select
                //@ts-ignore
                items={sex}
                value={fields.sex.value}
                onChange={fields.sex.onChange}
                disabled={personLoading}
                label="Выберите пол актера"
            />
            <Select
                //@ts-ignore
                items={professionValues}
                value={fields.professionValue.value}
                onChange={fields.professionValue.onChange}
                disabled={personLoading}
                label="Выберите профессию"
            />
        </PersonsSearchByParameterInputsWrap>
    )
}

const PersonsSearchByParameterInputsWrap = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
import styled from "styled-components";
import {useGate, useUnit} from "effector-react";
import {useForm} from "effector-forms";
import {Button, TextField} from "@mui/material";
import {$valuesBySearchPerson, fxPersonControllerSearchPerson} from "entities/person-controller-search-person";
import {PersonInfoCard, Select, Sidebar} from "shared/ui";
import {$personSearchForm, $selectItems, onValidate, PersonsPageGate} from "./model";

export const PersonsPage = () => {

    useGate(PersonsPageGate)

    const {fields} = useForm($personSearchForm)

    const [persons, selectItems, personLoading] = useUnit([$valuesBySearchPerson, $selectItems, fxPersonControllerSearchPerson.pending])

    const select = <Select
        items={selectItems}
        value={fields.searchType.value}
        onChange={fields.searchType.onChange}
        disabled={personLoading}
    />

    const searchButton = <Button
        className="search-button"
        variant="contained"
        size="large"
        onClick={() => onValidate()}
        disabled={personLoading}
    >
        Найти
    </Button>

    const infoCards = persons?.docs?.map((person : any) => {
        return <PersonInfoCard
            id={person.id}
            age={person.age}
            name={person.name}
            birthday={person.birthday}
            death={person.death}
            growth={person.growth}
            enName={person.enName}
            photo={person.photo}
            sex={person.sex}
            // onClick={setModalContent} //TODO Сделать модалку
        />
    })

    const filmNameTextField = <TextField
        className="name-text-field"
        id="outlined-basic"
        label="Введите имя актера"
        value={fields.query.value}
        onChange={(e) => fields.query.onChange(e.target.value)}
        error={!fields.query.isValid}
        helperText={fields.query.errorText()}
        disabled={false}
    />

    return (
        <PersonPageWrap>
            <div className='main-page-content-container'>
                {infoCards}
            </div>
            <div className='sidebar-container'>
                <div className='sidebar'>
                    <Sidebar
                        header={select}
                        footer={searchButton}
                    >
                        {filmNameTextField}
                    </Sidebar>
                </div>
            </div>
        </PersonPageWrap>
    )
}

const PersonPageWrap = styled.div `
    display: flex;
    padding-top: 64px;
    width: 100%;

    .main-page-content-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 3;
        padding: 1rem;
    }

    .sidebar-container {
        flex: 1;
    }

    .sidebar {
        position: sticky;
        top: 64px;
    }

    .name-text-field {
        width: 100%;
    }

    .search-button {
        width: 100%;
    }
`
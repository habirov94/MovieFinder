import styled from "styled-components";
import {useGate, useUnit} from "effector-react";
import {useForm} from "effector-forms";
import {Button, TextField} from "@mui/material";
import {$valuesBySearchPerson, fxPersonControllerSearchPerson} from "entities/person-controller-search-person";
import {$personListByQuery} from "entities/person-controller-find-many-by-query";
import {HintBox, PersonInfoCard, Select, Sidebar} from "shared/ui";
import {
    $personSearchForm,
    $selectItems,
    onValidate,
    PersonsPageGate,
    SEARCH_PERSON_BY_NAME,
    setModalContent
} from "./model";
import {PersonsSearchByParameterInputs} from "./ui/persons-search-by-parameter-inputs";

export const PersonsPage = () => {

    useGate(PersonsPageGate)

    const {fields} = useForm($personSearchForm)

    const [
        personsByName,
        personsByQuery,
        selectItems,
        personLoading
    ] = useUnit([
        $valuesBySearchPerson,
        $personListByQuery,
        $selectItems,
        fxPersonControllerSearchPerson.pending])

    const isSearchByName = fields.searchType.value === SEARCH_PERSON_BY_NAME

    const persons = isSearchByName ? personsByName : personsByQuery

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
            onClick={setModalContent}
            skeleton={personLoading}
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

    const personsBlock = Boolean(persons?.docs.length)
        ? infoCards
        : <HintBox searchByFilm={fields.searchType.value === SEARCH_PERSON_BY_NAME} searchResultLength={Boolean(persons?.docs)}/>

    const personSkeleton = [...Array(3)].map((count, index) => <PersonInfoCard key={index} skeleton/>)

    return (
        <PersonPageWrap>
            <div className='main-page-content-container'>
                {personLoading ? personSkeleton : personsBlock}
            </div>
            <div className='sidebar-container'>
                <div className='sidebar'>
                    <Sidebar
                        header={select}
                        footer={searchButton}
                    >
                        {isSearchByName ? filmNameTextField : <PersonsSearchByParameterInputs />}
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
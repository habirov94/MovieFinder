import styled from "styled-components";
import {useGate, useUnit} from "effector-react";
import {useForm} from "effector-forms";
import {Button, TextField} from "@mui/material";
import {$filmsListByName} from "entities/movie-controller-search-movie";
import {Sidebar, Select, InfoCard} from "shared/ui";
import {MainPageGate, $searchForm, $selectItems, onValidate} from "./model";


export const MainPage = () => {
    useGate(MainPageGate)
    const {fields} = useForm($searchForm)
    const [selectItems, films] = useUnit([$selectItems, $filmsListByName])

    const select = <Select
        items={selectItems}
        value={fields.searchType.value}
        onChange={fields.searchType.onChange}
    />

    const searchButton = <Button
        className="search-button"
        variant="contained"
        size="large"
        onClick={() => onValidate()}
    >
        Найти
    </Button>

    // @ts-ignore
    const infoCards = films?.data?.docs?.map((film) => { //TODO Разобраться с типизацией
        return <InfoCard
            id={film.id}
            name={film.name}
            posterUrl={film.poster.url}
            country={film.countries[0].name}
            year={film.year}
            description={film.description}
            ratingKp={film.rating.kp}
            ratingImdb={film.rating.imdb}
            genres={film.genres}
        />
    })

    return (
        <MainPageWrap>
            <div className='main-page-content-container'>
                {infoCards}
            </div>
            <div className='sidebar-container'>
                <div className='sidebar'>
                    <Sidebar
                        header={select}
                        footer={searchButton}
                    >
                        <TextField
                            className="name-text-field"
                            id="outlined-basic"
                            label="Введите название фильма"
                            value={fields.query.value}
                            onChange={(e) => fields.query.onChange(e.target.value)}
                            error={!fields.query.isValid}
                            helperText={fields.query.errorText()}
                        />
                    </Sidebar>
                </div>
            </div>
        </MainPageWrap>
    )
}

const MainPageWrap = styled.div`
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

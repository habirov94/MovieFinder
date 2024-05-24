import styled from "styled-components";
import {useGate, useUnit} from "effector-react";
import {useForm} from "effector-forms";
import {Button, TextField} from "@mui/material";
import {fxMovieControllerSearchMovie} from "entities/movie-controller-search-movie";
import {Sidebar, Select, InfoCard, HintBox} from "shared/ui";
import {
    MainPageGate,
    $searchForm,
    $selectItems,
    onValidate,
    SEARCH_BY_NAME,
    $sortedFilmsListByName,
    $sortedFilmsListByQuery,
    setModalContent
} from "./model";
import {SearchByParameterInputs} from "./ui/search-by-parameter-inputs";

export const MainPage = () => {
    useGate(MainPageGate)
    const {fields} = useForm($searchForm)
    const [
        selectItems,
        filmsByName,
        filmsByQuery,
        filmsLoading
    ] = useUnit([
        $selectItems,
        $sortedFilmsListByName,
        $sortedFilmsListByQuery,
        fxMovieControllerSearchMovie.pending
    ])

    const isSearchByName = fields.searchType.value === SEARCH_BY_NAME

    const films = isSearchByName ? filmsByName : filmsByQuery

    const select = <Select
        items={selectItems}
        value={fields.searchType.value}
        onChange={fields.searchType.onChange}
        disabled={filmsLoading}
    />

    const searchButton = <Button
        className="search-button"
        variant="contained"
        size="large"
        onClick={() => onValidate()}
        disabled={filmsLoading}
    >
        Найти
    </Button>

    const infoCards = films?.map((film : any) => {
        return <InfoCard
            key={film.id}
            id={film.id}
            name={film.name || film.alternativeName}
            posterUrl={film.poster?.url}
            country={film.countries[0]?.name}
            year={film.year}
            description={film.description}
            ratingKp={film.rating.kp}
            ratingImdb={film.rating.imdb}
            genres={film.genres}
            onClick={setModalContent}
        />
    })

    const filmNameTextField = <TextField
        className="name-text-field"
        id="outlined-basic"
        label="Введите название фильма"
        value={fields.query.value}
        onChange={(e) => fields.query.onChange(e.target.value)}
        error={!fields.query.isValid}
        helperText={fields.query.errorText()}
        disabled={filmsLoading}
    />

    const filmsBlock = Boolean(films?.length)
        ? infoCards
        : <HintBox searchByFilm={fields.searchType.value === SEARCH_BY_NAME} searchResultLength={Boolean(films)}/>

    const filmsSkeleton = [...Array(3)].map((count, index) => <InfoCard key={index} skeleton/>)

    return (
        <MainPageWrap>
            <div className='main-page-content-container'>
                {filmsLoading ? filmsSkeleton : filmsBlock}
            </div>
            <div className='sidebar-container'>
                <div className='sidebar'>
                    <Sidebar
                        header={select}
                        footer={searchButton}
                    >
                        {isSearchByName ? filmNameTextField : <SearchByParameterInputs />}
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

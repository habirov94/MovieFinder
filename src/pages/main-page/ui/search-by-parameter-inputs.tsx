import styled from "styled-components";
import {useForm} from "effector-forms";
import {useUnit} from "effector-react";
import {TextField} from "@mui/material";
import {fxMovieControllerFindManyByQuery} from "entities/movie-controller- find-many-by-query";
import {Select} from "shared/ui";
import {$filmsCountry, $filmsGenres, $searchForm} from "../model";


export const SearchByParameterInputs = () => {
    const {fields} = useForm($searchForm)
    const [
        filmsLoading,
        genres,
        countries
    ] = useUnit([
        fxMovieControllerFindManyByQuery.pending,
        $filmsGenres,
        $filmsCountry
    ])

    console.log(genres)

    return (
        <SearchByParameterInputsWrap>
            <TextField
                autoComplete="off"
                type="number"
                className="name-text-field"
                id="outlined-basic"
                label="Введите год выхода фильма"
                value={fields.year.value}
                onChange={(e) => fields.year.onChange(e.target.value)}
                error={!fields.year.isValid}
                helperText={fields.year.errorText()}
                disabled={filmsLoading}
            />

            <Select
                //@ts-ignore
                items={genres}
                value={fields.genresName.value}
                onChange={fields.genresName.onChange}
                disabled={filmsLoading}
                label="Выберите жанр фильма"
            />

            <Select
                //@ts-ignore
                items={countries}
                value={fields.countriesName.value}
                onChange={fields.countriesName.onChange}
                disabled={filmsLoading}
                label="Выберите страну производства фильма"
            />
        </SearchByParameterInputsWrap>
    )
}

const SearchByParameterInputsWrap = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
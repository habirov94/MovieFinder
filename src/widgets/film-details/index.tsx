import React from "react";
import styled from "styled-components";
import {useGate, useUnit} from "effector-react";
import {List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Typography} from "@mui/material";
import {MovieDtoV14} from "generate/data-contracts";
import {ImgBox} from "shared/ui";
import {$movieDetails, FilmDetailsGate} from "./model";
import {IFilmDetails} from "./type";

export const FilmDetails: React.FC<IFilmDetails> = ({
                                                        filmId,
                                                        onClick
                                                    }) => {
    useGate(FilmDetailsGate, filmId)

    const filmDetails = useUnit($movieDetails)
    const film: MovieDtoV14 = filmDetails[filmId]

    return (
        <FilmDetailsWrapper>
            <div className="basic-information-box">
                <ImgBox src={film?.poster?.url}/>
                <div className="description-box">
                    <Typography variant="h4">
                        {film?.name}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Оригинальное название: {film?.alternativeName}
                    </Typography>
                    <Typography display="block" variant="caption" color="text.secondary">
                        {film?.description}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Для просмотра с {film?.ageRating} лет
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Бюджет: {film?.budget?.value?.toLocaleString('en-US')} {film?.budget?.currency}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Продолжительность: {film?.movieLength} минут
                    </Typography>
                </div>
            </div>
            <div className="persons-info-block">
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Основные актеры:
                    </ListSubheader>
                }>
                    {film?.persons?.slice(0, 6).map((person) => {
                        return (
                            <ListItem onClick={() => onClick && onClick(person.id)}>
                                <ListItemAvatar>
                                    <ImgBox src={person.photo} height={45} width={30}/>
                                </ListItemAvatar>
                                <ListItemText primary={person.name} secondary={person.description}/>
                            </ListItem>
                        )
                    })}
                </List>
                <div>
                    <List sx={{bgcolor: 'background.paper'}} subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Похожие фильмы:
                        </ListSubheader>
                    }>
                        {film?.similarMovies?.slice(0, 6).map((similarMovie) => {
                            return (
                                <ListItem>
                                    <ListItemAvatar>
                                        <ImgBox src={similarMovie?.poster?.url} height={45} width={30}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={similarMovie.name} secondary={similarMovie.year}/>
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            </div>
        </FilmDetailsWrapper>
    )
}

const FilmDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 800px;
    min-height: 950px;
    gap: 1rem;
    
    .basic-information-box {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .description-box {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .persons-info-block {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
`
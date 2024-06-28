import React from "react";
import styled from "styled-components";
import {useGate, useUnit} from "effector-react";
import {Box, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Skeleton, Typography} from "@mui/material";
import {fxPersonControllerFindOne} from "entities/person-controller-find-one";
import {Person} from "generate/Api";
import {ImgBox} from "shared/ui";
import {dateFormatter} from "shared/lib";
import {$filteredPostersUrl, $personInfo, PersonDetailsGate} from "./model";
import {IPersonDetails} from "./type";

export const PersonDetails: React.FC<IPersonDetails> = ({
                                                            personId,
                                                            onClick
}) => {
    useGate(PersonDetailsGate, personId)

    const [personDetails, personDetailLoading, postersUrl] = useUnit([$personInfo, fxPersonControllerFindOne.pending, $filteredPostersUrl])
    const person: Person = personDetails[personId]

    if (personDetailLoading) {
        return (
            <PersonDetailsWrapper>
                <div className="basic-information-box">
                    <Skeleton variant="rectangular" width={210} height={315}/>
                    <div className="description-box">
                        <Box className="infocard-content" sx={{pr: 2}}>
                            <Skeleton variant="rectangular" width={200} height={30}/>
                            <Skeleton variant="rectangular" width={150} height={30}/>
                            <Skeleton variant="rectangular" width={300} height={30}/>
                        </Box>
                    </div>
                </div>
            </PersonDetailsWrapper>
        )
    }

    return (
        <PersonDetailsWrapper>
            <div className="basic-information-box">
                <ImgBox src={person?.photo}/>
                <div className="description-box">
                    <Typography variant="h4">
                        {person?.name} ({person?.enName})
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Место
                        рождения: {person?.birthPlace?.reduce((fullPlace, place, index) => fullPlace + (index ? ", " : "") + place.value, "")}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Дата рождения: {person?.birthday ? dateFormatter(new Date(person?.birthday)) : "Нет данных"}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Колличесво наград: {person?.countAwards}
                    </Typography>
                </div>
            </div>
            <div className="persons-info-block">
                {Boolean(person?.facts?.length) &&
                    (<List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Факты
                        </ListSubheader>
                    }>
                        {person?.facts?.slice(0, 6).map((fact) => {
                            return (
                                <ListItem>
                                    <ListItemText secondary={fact.value}/>
                                </ListItem>
                            )
                        })}
                    </List>)}
                {Boolean(person?.movies?.length) &&
                    (<List sx={{bgcolor: 'background.paper'}} subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Фильмы:
                        </ListSubheader>
                    }>
                        {person?.movies?.slice(0, 6).map((movie) => {
                            return (
                                <ListItem onClick={() => onClick && onClick(movie.id)}>
                                    <ListItemAvatar>
                                        <ImgBox src={postersUrl?.[movie.id]} height={45} width={30}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={movie.name ?? movie.alternativeName}
                                                  secondary={movie.description}/>
                                </ListItem>
                            )
                        })}
                    </List>)}
            </div>
        </PersonDetailsWrapper>
    )
}

const PersonDetailsWrapper = styled.div`
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
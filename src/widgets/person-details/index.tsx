import React from "react";
import styled from "styled-components";
import {useGate, useUnit} from "effector-react";
import {Box, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Skeleton, Typography} from "@mui/material";
import {$personDetails, fxPersonControllerFindOne} from "entities/person-controller-find-one";
import {ImgBox} from "shared/ui";
import {dateFormatter} from "shared/lib";
import {$filteredPostersUrl, PersonDetailsGate} from "./model";
import {IPersonDetails} from "./type";

export const PersonDetails: React.FC<IPersonDetails> = ({
                                                            personId
                                                        }) => {
    useGate(PersonDetailsGate, personId)

    const [personDetails, personDetailLoading, postersUrl] = useUnit([$personDetails, fxPersonControllerFindOne.pending, $filteredPostersUrl])

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
                <ImgBox src={personDetails?.photo}/>
                <div className="description-box">
                    <Typography variant="h4">
                        {personDetails?.name} ({personDetails?.enName})
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Место
                        рождения: {personDetails?.birthPlace?.reduce((fullPlace, place, index) => fullPlace + (index ? ", " : "") + place.value, "")}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Дата рождения: {personDetails?.birthday ? dateFormatter(new Date(personDetails?.birthday)) : "Нет данных"}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Колличесво наград: {personDetails?.countAwards}
                    </Typography>
                </div>
            </div>
            <div className="persons-info-block">
                {Boolean(personDetails?.facts?.length) &&
                    (<List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Факты
                        </ListSubheader>
                    }>
                        {personDetails?.facts?.slice(0, 6).map((fact) => {
                            return (
                                <ListItem>
                                    <ListItemText secondary={fact.value}/>
                                </ListItem>
                            )
                        })}
                    </List>)}
                {Boolean(personDetails?.movies?.length) &&
                    (<List sx={{bgcolor: 'background.paper'}} subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Фильмы:
                        </ListSubheader>
                    }>
                        {personDetails?.movies?.slice(0, 6).map((movie) => {
                            return (
                                <ListItem>
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
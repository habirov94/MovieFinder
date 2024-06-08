import React from "react";
import styled from "styled-components";
import {Box, Skeleton, Typography} from "@mui/material";
import {ImgBox} from "shared/ui";
import {dateFormatter} from "shared/lib";
import {IPersonInfoCard} from "./types";

export const PersonInfoCard: React.FC<IPersonInfoCard> = ({
                                                              id,
                                                              age,
                                                              name,
                                                              birthday,
                                                              death,
                                                              growth,
                                                              enName,
                                                              photo,
                                                              sex,
                                                              skeleton,
                                                              onClick
                                                          }) => {
    if (skeleton) {
        return (
            <PersonInfoCardWrapper>
                <Box className="info-item" key={id} sx={{marginRight: 0.5, my: 5}}>
                    <Skeleton variant="rectangular" width={210} height={315}/>
                    <Box className="infocard-content" sx={{pr: 2}}>
                        <Skeleton variant="rectangular" width={500} height={40}/>
                        <Skeleton variant="rectangular" width={150} height={30}/>
                        <Skeleton variant="rectangular" width={200} height={30}/>
                        <Skeleton variant="rectangular" width={800} height={100}/>
                    </Box>
                </Box>
            </PersonInfoCardWrapper>
        )
    }

    return (
        <PersonInfoCardWrapper onClick={() => onClick && onClick(id)}>
            <Box className="info-item" key={id} sx={{marginRight: 0.5, my: 5}}>
                <ImgBox alt={name} src={photo}/>
                <Box className="infocard-content" sx={{pr: 2}}>
                    <div className="infocard-header">
                        <Typography variant="h4">
                            {name} ({enName})
                        </Typography>
                    </div>
                    <Typography gutterBottom variant="body2">
                        Возраст: {age}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Дата Рождения: {birthday ? dateFormatter(new Date(birthday)) : "Нет данных"}
                    </Typography>
                    {
                        Boolean(death?.length) &&
                        <Typography gutterBottom variant="body2">
                            Дата смерти: {death ? dateFormatter(new Date(death)) : "Нет данных"}
                        </Typography>
                    }
                    <Typography gutterBottom variant="body2">
                        Рост: {growth} санитиметров
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Пол: {sex}
                    </Typography>
                </Box>
            </Box>
        </PersonInfoCardWrapper>
    )
}

const PersonInfoCardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .grid-container {
        gap: 1rem;
    }

    .info-item {
        display: flex;
        padding: 1rem;
        gap: 2rem;
        margin: 0;
        border: 1px solid rgba(34, 60, 80, 0.2);
        border-radius: 5px;
        box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
    }

    .info-item:hover {
        border: 1px solid black;
    }

    .infocard-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .infocard-header {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .raitings-container {
        display: flex;
        gap: 1rem;
    }
`
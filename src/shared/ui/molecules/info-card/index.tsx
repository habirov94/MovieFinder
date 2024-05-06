import React from "react";
import styled from "styled-components";
import {Box, Chip, Typography} from "@mui/material";
import defaultPoster from "shared/images/default-poster.png"
import {IInfoCard} from "./types";

export const InfoCard: React.FC<IInfoCard> = ({
                                                  id,
                                                  name,
                                                  posterUrl,
                                                  country,
                                                  year,
                                                  description,
                                                  ratingKp,
                                                  ratingImdb,
                                                  genres,
                                              }) => {
    return (
        <InfoCardWrapper>
            <Box className="info-item" key={id} sx={{marginRight: 0.5, my: 5}}>
                <img
                    style={{width: 210, height:315}}
                    alt={name}
                    src={posterUrl ?? defaultPoster}
                />
                <Box className="infocard-content" sx={{pr: 2}}>
                    <div className="infocard-header">
                        <Typography variant="h4">
                            {name}
                        </Typography>
                        <div className="raitings-container">
                            <Chip color="primary" variant="outlined" label={"Кинопоиск: " + ratingKp}/>
                            <Chip color="primary" variant="outlined" label={"IMDB: " + ratingImdb}/>
                        </div>
                    </div>
                    <Typography gutterBottom variant="body2">
                        {country}, {year} год
                    </Typography>
                    <div className="raitings-container">
                        {genres.map(genre => <Chip size="small" label={genre.name}/>)}
                    </div>
                    <Typography display="block" variant="caption" color="text.secondary">
                        {description}
                    </Typography>
                </Box>
            </Box>
        </InfoCardWrapper>
    )
}

const InfoCardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .grid-container {
        gap: 1rem;
    }

    img {
        border-radius: 5px;
    }

    .info-item {
        display: flex;
        padding: 1rem;
        gap: 2rem;
        margin: 0;
        border: 1px solid rgba(34, 60, 80, 0.2);
        border-radius: 5px;
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
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
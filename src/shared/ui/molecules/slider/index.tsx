import React from "react";
import styled from "styled-components";
import {Box, Slider as MuiSlider, Typography} from "@mui/material";
import {ISlider} from "./types";

export const Slider: React.FC<ISlider> = ({
                                              value,
                                              onChange = () => {
                                              },
                                              sliderLabel,
                                              step,
                                              minValue,
                                              maxValue,
                                              disabled
                                          }) => {

    return (
        <SliderWrap>
            <Typography variant="subtitle1" component="h2">
                {sliderLabel}
            </Typography>
            <Box sx={{width: 300}}>
                <MuiSlider
                    value={value}
                    onChange={
                        ((data, value) => onChange(value as number[]))
                    }
                    valueLabelDisplay="auto"
                    step={step}
                    min={minValue}
                    max={maxValue}
                    disabled={disabled}
                />
            </Box>
        </SliderWrap>
    )
}

const SliderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    border: 1px #c5c5c5 solid;
    border-radius: 4px;
    height: 56px;
`
import React from "react";
import styled from "styled-components";
import {Box, Slider as MuiSlider, Typography} from "@mui/material";
import {ISlider} from "shared/ui/molecules/slider/types";

export const Slider : React.FC <ISlider> = ({
                           value,
                           onChange = () => {},
                           sliderLabel
                       }) => {

    return(
        <SliderWrap>
            <Typography variant="subtitle1" component="h2">
                {sliderLabel}
            </Typography>
            <Box sx={{ width: 300 }}>
                {/*<MuiSlider*/}
                {/*    getAriaLabel={() => 'Temperature range'}*/}
                {/*    value={value}*/}
                {/*    onChange={(event: Event, newValue: number | number[]) => {*/}
                {/*        let data = newValue as number[]*/}
                {/*        console.log(data)*/}
                {/*        //@ts-ignore*/}
                {/*        onChange(data.target.value);*/}
                {/*    }}*/}
                {/*    valueLabelDisplay="auto"*/}
                {/*    step={0.1}*/}
                {/*    min={0}*/}
                {/*    max={10}*/}
                {/*/>*/}
            </Box>
        </SliderWrap>
    )
}

const SliderWrap = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 1rem ;
    border: 1px black solid;
    border-radius: 4px;
    height: 56px;
    
`
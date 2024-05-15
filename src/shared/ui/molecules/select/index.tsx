import React from "react";
import {MenuItem, Select as MuiSelect} from "@mui/material";
import {ISelect} from "shared/ui/molecules/select/types";
import styled from "styled-components";

export const Select: React.FC<ISelect> = ({
                                              items = [],
                                              value = '',
                                              onChange = () => {},
                                              disabled
                                          }) => {
    return (
        <SelectWrap>
            <MuiSelect value={value} className="mui-select" disabled={disabled} onChange={(data) => onChange(data.target.value)}>
                {
                    items.map((item) => {
                        return <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                    })
                }
            </MuiSelect>
        </SelectWrap>
    )
}

const SelectWrap = styled.div `
    .mui-select {
        width: 100%;
    }
`
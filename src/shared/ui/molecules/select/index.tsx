import React from "react";
import styled from "styled-components";
import {MenuItem, Select as MuiSelect} from "@mui/material";
import {ISelect} from "shared/ui/molecules/select/types";

export const Select: React.FC<ISelect> = ({
                                              items = [],
                                              value = '',
                                              onChange = () => {},
                                              disabled,
                                              label
                                          }) => {
    return (
        <SelectWrap>
            <MuiSelect
                value={value}
                className="mui-select"
                disabled={disabled}
                onChange={(data) => onChange(data.target.value)}
                label={label}
            >
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

    .MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list {
        max-height: 280px;
    }
`
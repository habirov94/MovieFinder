import React from "react";
import styled from "styled-components";
import {FormControl, InputLabel, MenuItem, Select as MuiSelect, Skeleton} from "@mui/material";
import {ISelect} from "shared/ui/molecules/select/types";

export const Select: React.FC<ISelect> = ({
                                              items = [],
                                              value,
                                              onChange = () => {},
                                              disabled,
                                              label,
                                              skeleton
                                          }) => {
    if (skeleton) {
        return <Skeleton variant="rectangular" width='100%' height={56} />
    }

    return (
        <SelectWrap>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <MuiSelect
                    labelId="demo-simple-select-label"
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
            </FormControl>
        </SelectWrap>
    )
}

const SelectWrap = styled.div`
    .mui-select {
        width: 100%;
    }

    .MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list {
        max-height: 280px;
    }
`
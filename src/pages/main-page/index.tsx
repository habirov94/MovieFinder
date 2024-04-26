import styled from "styled-components";
import {useGate, useUnit} from "effector-react";
import {useForm} from "effector-forms";
import {Sidebar, Select} from "shared/ui";
import {MainPageGate, $searchForm, $selectItems, onValidate} from "./model";
import {Button, TextField} from "@mui/material";

export const MainPage = () => {
    useGate(MainPageGate)
    const {fields} = useForm($searchForm)
    const [selectItems] = useUnit([$selectItems])

    console.log(fields.query)

    const select = <Select
        items={selectItems}
        value={fields.searchType.value}
        onChange={fields.searchType.onChange}
    />

    const searchButton = <Button
        className="search-button"
        variant="contained"
        size="large"
        onClick={() => onValidate()}
    >
        Найти
    </Button>

    return (
        <MainPageWrap>
            <div className='main-page-content-container'>

            </div>
            <div className='sidebar-container'>
                <Sidebar
                    header={select}
                    footer={searchButton}
                >
                    <TextField
                        className="name-text-field"
                        id="outlined-basic"
                        label="Введите название фильма"
                        value={fields.query.value}
                        onChange={(e) => fields.query.onChange(e.target.value)}
                        error={!fields.query.isValid}
                        helperText={fields.query.errorText()}
                    />
                </Sidebar>
            </div>
        </MainPageWrap>
    )
}

const MainPageWrap = styled.div`
    display: flex;
    width: 100%;

    .main-page-content-container {
        flex: 3;
    }

    .sidebar-container {
        flex: 1;
    }

    .name-text-field {
        width: 100%;
    }

    .search-button {
        width: 100%;
    }
`

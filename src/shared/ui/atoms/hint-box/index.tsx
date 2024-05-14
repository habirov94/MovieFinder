import React from "react";
import {Alert} from "@mui/material";
import {IHintText} from "./type";

export const HintBox: React.FC <IHintText> = ({
                                                  searchByFilm,
                                                  searchResultLength = true
                                              }) => {
    return searchResultLength
                    ? <Alert severity="warning">Фильм не найден</Alert>
                    : <Alert severity="info">{searchByFilm ? "Введите название фильма и нажмите - Найти" : "Введите параметры фильма и нажмите - Найти"}</Alert>
}



import React from "react";
import {createEvent, sample} from "effector";
import {FilmDetails} from "widgets/film-details";
import {addModal} from "features/global-modal/model";
import {setModalContent as setPersonModalContent} from "pages/persons-page/model/person-details-modal"

export const setModalContent = createEvent<number>('Отправлет данные для модалки')

sample({
    clock: setModalContent,
    fn: (id) => ({content: React.createElement(FilmDetails, {filmId: id, onClick: setPersonModalContent})}),
    target: addModal
})
import React from "react";
import {createEvent, sample} from "effector";
import {PersonDetails} from "widgets/person-details";
import {addModal} from "features/global-modal/model";
import {setModalContent as setMovieModalContent} from "pages/main-page/model/film-details-modal"

export const setModalContent = createEvent<number>('Отправлет данные для модалки')

sample({
    clock: setModalContent,
    fn: (id) => ({content: React.createElement(PersonDetails, {personId: id, onClick: setMovieModalContent})}),
    target: addModal
})
import React from "react";
import {createEvent, sample} from "effector";
import {PersonDetails} from "widgets/person-details";
import {addModal} from "features/global-modal/model";


export const setModalContent = createEvent<number>('Отправлет данные для модалки')

sample({
    clock: setModalContent,
    fn: (id) => ({content: React.createElement(PersonDetails, {personId: id})}),
    target: addModal
})
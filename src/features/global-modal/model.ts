import {createEvent, createStore, sample} from "effector";
import {IModalData, ISetModalData} from "./types";

export const addModal = createEvent<ISetModalData>("передает данные для отрисовки модалки")

export const deleteModal = createEvent<number>("Удаляет модалку")

export const $modalData = createStore<IModalData[]>([{
    key: 123,
    content: "privet"
}])

sample({
    source: $modalData,
    clock: addModal,
    fn: (data, content) => {
        return [...data, {...content, key: Number(new Date())}]
    },
    target: $modalData,
})

sample({
    source: $modalData,
    clock: deleteModal,
    fn: (modalData, key) => {
        return modalData.filter((content) => content.key !== key)
    },
    target: $modalData,
})
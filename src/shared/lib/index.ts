/**
 * Приводит дату к формату: DD MONTH YYYY
 *
 * @param {string} date - строка с датой в формате ISO.
 * @returns {string} - строка с датой в формате: дд месяц гггг.
 */

export function dateFormatter(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };
    return date.toLocaleDateString('ru-RU', options);
}

/**
 * Удаляет из объекта все элементы с пустыми значениями
 *
 * @param {[key: string]: any} payload - изменяемый объект
 * @returns {[key: string]: any} - измененный объект, без элементов с пустыми значениями
 */

export const removeEmptyValues = (payload: {[key: string]: any}) => {
    const newPayload: {[key: string]: any} = {}
    Object.keys(payload).forEach((el) => {
        if (payload[el] !== '') {
            newPayload[el] = payload[el];
        }
    }, {});
    return newPayload
}
/**
 * Приводит дату к формату: DD MONTH YYYY
 *
 * @param {string | undefined} date - строка с датой в формате ISO.
 * @returns {string} - строка с датой в формате: дд месяц гггг.
 */

export function dateFormatter (date: string | undefined) {
    if (date) {
        const newDate:Date = new Date(date)
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        };
        return newDate.toLocaleDateString('ru-RU', options);
    }
    return 'неизвестно'
}
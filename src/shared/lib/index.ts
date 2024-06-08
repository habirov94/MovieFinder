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
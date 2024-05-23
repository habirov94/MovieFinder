import {MovieDtoV14, SearchMovieDtoV14} from "generate/data-contracts";

/**
 * Сортирует массив с фильмами по уменьшению рейтинга кинопоиска и imdb
 *
 * @param {array} films - Массив с фильмами.
 * @returns {array} - Отсортированный массив с фильмами.
 */

export function getSortedArray (films: SearchMovieDtoV14[] | MovieDtoV14[]) {
    return [...films].sort((el1, el2) => {
        if (el1!.rating!.kp! < el2!.rating!.kp!) return 1;
        if (el1!.rating!.kp! > el2!.rating!.kp!) return -1;
        if (el1!.rating!.imdb! < el2!.rating!.imdb!) return 1;
        if (el1!.rating!.imdb! > el2!.rating!.imdb!) return -1;
        return 0
    })
}
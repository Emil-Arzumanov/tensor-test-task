import { SortDirectionDto } from "types/dtos/ListFilter.dto";
import { NoteDto } from "types/dtos/NoteList.dto";

/**
 * Return elements, that include search string in their headings.
 * @param parsedData Passed array of data parsed as NoteDto[].
 * @param search Search string.
 * @returns new array as NoteDto[].
 */
export function filterBySearch(
  parsedData: NoteDto[],
  search: string
): NoteDto[] {
  if (search.length >= 0) {
    return parsedData.filter((elem) => {
      return elem.heading.includes(search);
    });
  }
  return parsedData;
}

/**
 * Return array, that is sorted by date field, according to sort direction.
 * @param parsedData Passed array of data parsed as NoteDto[].
 * @param sort Sort field, its type is SortDirectionDto enum.
 * @returns new array as NoteDto[].
 */
export function filterBySort(
  parsedData: NoteDto[],
  sort: SortDirectionDto
): NoteDto[] {
  return parsedData.sort((firstElem, secondElem) => {
    if (sort === SortDirectionDto.Asc) {
      return +new Date(firstElem.date) - +new Date(secondElem.date);
    }
    return +new Date(secondElem.date) - +new Date(firstElem.date);
  });
}

/**
 * Takes enum as argument and return array of its keys.
 * @param enumVariable Enum.
 * @returns Array of enum keys.
 */
export function getEnumKeys<
  T extends string,
  TEnumValue extends string | number
>(enumVariable: { [key in T]: TEnumValue }) {
  return Object.keys(enumVariable) as Array<T>;
}

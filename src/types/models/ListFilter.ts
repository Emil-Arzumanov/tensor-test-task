/** Represents field for filtration. Model of filtration. */
export interface ListFilter {
  /** Field for search. */
  readonly search: string;

  /** Field for sort. With enum as type */
  readonly sort: SortDirection;
}

/** Possible sorting direction model. */
export enum SortDirection {
  Asc = "ascending",
  Desc = "descending",
}

/**
 * Sort direction mapper.
 * From model to readable.
 */
export const SORT_DIRECTION_TO_READABLE = {
  [SortDirection.Asc]: "возрастанию даты",
  [SortDirection.Desc]: "убыванию даты",
};

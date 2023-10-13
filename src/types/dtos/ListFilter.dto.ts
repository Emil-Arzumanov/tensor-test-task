/** Represents field for filtration. Dto of filtration. */
export interface ListFilterDto {
  /** Field for search. */
  readonly search: string;

  /** Field for sort. With enum as type */
  readonly sort: SortDirectionDto;
}

/** Possible sorting direction dto. */
export enum SortDirectionDto {
  Asc = "asc",
  Desc = "desc",
}

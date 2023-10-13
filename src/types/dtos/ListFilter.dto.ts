/** Represents field for filtration. Dto of filtration. */
export interface ListFilterDto {
  readonly search: string;
  readonly sort: SortDirectionDto;
}

/** Possible sorting direction dto. */
export enum SortDirectionDto {
  Asc = "asc",
  Desc = "desc",
}

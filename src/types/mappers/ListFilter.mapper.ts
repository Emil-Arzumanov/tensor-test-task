import { ListFilterDto, SortDirectionDto } from "types/dtos/ListFilter.dto";
import { ListFilter, SortDirection } from "types/models/ListFilter";

export namespace ListFilterMapper {
  /**
   * Maps ListFilterDto dto to ListFilter model.
   */
  export function fromDto(dto: ListFilterDto): ListFilter {
    return {
      search: dto.search,
      sort: SORT_DIRECTION_FROM_DTO_MAP[dto.sort],
    };
  }

  /**
   * Maps ListFilter model to ListFilterDto dto.
   */
  export function toDto(model: ListFilter): ListFilterDto {
    return {
      search: model.search,
      sort: SORT_DIRECTION_TO_DTO_MAP[model.sort],
    };
  }

  /**
   * Sort direction mapper.
   * From dto to model.
   */
  export const SORT_DIRECTION_FROM_DTO_MAP = {
    [SortDirectionDto.Asc]: SortDirection.Asc,
    [SortDirectionDto.Desc]: SortDirection.Desc,
  };

  /**
   * Sort direction mapper.
   * From model to dto.
   */
  export const SORT_DIRECTION_TO_DTO_MAP = {
    [SortDirection.Asc]: SortDirectionDto.Asc,
    [SortDirection.Desc]: SortDirectionDto.Desc,
  };
}

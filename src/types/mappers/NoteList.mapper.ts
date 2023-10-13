import { NoteDto } from "types/dtos/NoteList.dto";
import { Note } from "types/models/NoteList";

export namespace NoteMapper {
  /**
   * Maps NoteDto dto to Note model.
   */
  export function fromDto(dto: NoteDto): Note {
    return {
      id: dto.id,
      heading: dto.heading,
      date: new Date(dto.date),
      text: dto.text,
    };
  }

  /**
   * Maps Note model to NoteDto dto.
   */
  export function toDto(model: Note): NoteDto {
    return {
      id: model.id,
      heading: model.heading,
      date: model.date.toJSON(),
      text: model.text,
    };
  }

  /**
	 * Anime statuses mapper.
	 * From dto to model.
	 *
	export const ANIME_STATUSES_FROM_DTO_MAP = {
		[AnimeStatusDto.Airing]: AnimeStatus.Airing,
		[AnimeStatusDto.Finished]: AnimeStatus.Finished,
		[AnimeStatusDto.NotYetAired]: AnimeStatus.NotYetAired,
	};*/
}

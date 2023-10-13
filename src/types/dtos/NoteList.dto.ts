/** Represents one anime. Dto of received data. */
export interface NoteDto {
  readonly id: number;

  readonly heading: string;

  readonly date: string;

  readonly text: string;
}

/** All statuses. */
export enum AnimeStatusDto {
  Airing = "AIRING",
  Finished = "FINISHED",
  NotYetAired = "NOT_YET_AIRED",
}

/** Represents one note. */
export interface Note {
  /** Id of note. */
  readonly id: number;

  /** Heading of note. */
  readonly heading: string;

  /** Date when note was created. */
  readonly date: Date;

  /** Main text of note. */
  readonly text: string;
}

/** All statuses. */
export enum AnimeStatus {
  Airing = "Airing",
  Finished = "Finished",
  NotYetAired = "Not Yet Aired",
}

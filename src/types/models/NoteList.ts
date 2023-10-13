/** Represents one note. */
export interface Note {
  readonly id: number;

  readonly heading: string;

  readonly date: Date;

  readonly text: string;
}

/** All statuses. */
export enum AnimeStatus {
  Airing = "Airing",
  Finished = "Finished",
  NotYetAired = "Not Yet Aired",
}

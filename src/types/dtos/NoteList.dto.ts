/** Represents one anime. Dto of received data. */
export interface NoteDto {
  /** Id of note. */
  readonly id: number;

  /** Heading of note. */
  readonly heading: string;

  /** Date when note was created. */
  readonly date: string;

  /** Main text of note. */
  readonly text: string;
}

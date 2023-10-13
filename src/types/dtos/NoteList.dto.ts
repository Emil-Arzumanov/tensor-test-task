/** Represents one anime. Dto of received data. */
export interface NoteDto {
  readonly id: number;

  readonly heading: string;

  readonly date: string;

  readonly text: string;
}

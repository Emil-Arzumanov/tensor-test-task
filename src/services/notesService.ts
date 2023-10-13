import { NoteDto } from "types/dtos/NoteList.dto";
import { NoteMapper } from "types/mappers/NoteList.mapper";
import { Note } from "types/models/NoteList";

export namespace NotesService {
  /**
   * Get note list from local storage.
   */
  export function getNotes(): Note[] {
    const storageData = localStorage.getItem("notes");
    if (storageData === null) return [];

    const parsedData: NoteDto[] = JSON.parse(storageData);
    return parsedData.map((dto) => NoteMapper.fromDto(dto));
  }

  /**
   * Get one note by id from local storage.
   */
  export function getNoteById(id: number): Note | null {
    const storageData = localStorage.getItem("notes");
    if (storageData === null) return null;

    const parsedData: NoteDto[] = JSON.parse(storageData);
    for (let i = 0; i < parsedData.length; i++) {
      if (parsedData[i].id === id) {
        return NoteMapper.fromDto(parsedData[i]);
      }
    }

    return null;
  }

  /**
   * Delete note from local storage.
   */
  export function deleteNote(id: number): void {
    const storageData = localStorage.getItem("notes");

    if (storageData !== null) {
      let parsedData: NoteDto[] = JSON.parse(storageData);

      parsedData = parsedData.filter((note) => {
        if (note.id !== id) return true;
        return false;
      });

      localStorage.setItem("notes", JSON.stringify(parsedData));
    }
  }

  /**
   * Add note to local storage.
   */
  export function addNote(note: Note): void {
    const storageData = localStorage.getItem("notes");

    if (storageData !== null) {
      let parsedData: NoteDto[] = JSON.parse(storageData);
      parsedData.push(NoteMapper.toDto(note));

      localStorage.setItem("notes", JSON.stringify(parsedData));
    }
  }

  /**
   * Edit note in local storage.
   */
  export function editNote(note: Note): void {
    const storageData = localStorage.getItem("notes");
    const dtoNote = NoteMapper.toDto(note);

    if (storageData !== null) {
      let parsedData: NoteDto[] = JSON.parse(storageData);
      for (let i = 0; i < parsedData.length; i++) {
        if (parsedData[i].id === note.id) {
          parsedData[i] = dtoNote;
        }
      }

      localStorage.setItem("notes", JSON.stringify(parsedData));
    }
  }
}

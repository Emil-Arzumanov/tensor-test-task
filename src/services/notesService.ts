import { NoteDto } from "types/dtos/NoteList.dto";
import { ListFilterMapper } from "types/mappers/ListFilter.mapper";
import { NoteMapper } from "types/mappers/NoteList.mapper";
import { ListFilter } from "types/models/ListFilter";
import { Note } from "types/models/NoteList";
import { filterBySearch, filterBySort } from "utils/ListFilter.utils";

export namespace NotesService {
  /**
   * Get note list from local storage.
   * @param listFilters Object of filters for result array.
   * @returns array of Notes as Note model.
   */
  export function getNotes(listFilters?: ListFilter): Note[] {
    const storageData = localStorage.getItem("notes");
    if (storageData === null) return [];

    let parsedData: NoteDto[] = JSON.parse(storageData);

    if (listFilters) {
      const listFiltersDto = ListFilterMapper.toDto(listFilters);
      parsedData = filterBySearch(parsedData, listFiltersDto.search);
      parsedData = filterBySort(parsedData, listFiltersDto.sort);
    }

    return parsedData.map((dto) => NoteMapper.fromDto(dto));
  }

  /**
   * Get one note by id from local storage.
   * @param id Id of chosen note.
   * @returns one Note from Note array as Note model or null.
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
   * @param id Id of chosen note.
   * @returns void.
   */
  export function deleteNote(id: number): void {
    const storageData = localStorage.getItem("notes");
    if (storageData === null) return;

    let parsedData: NoteDto[] = JSON.parse(storageData);
    parsedData = parsedData.filter((note) => {
      if (note.id !== id) return true;
      return false;
    });

    localStorage.setItem("notes", JSON.stringify(parsedData));
  }

  /**
   * Add note to local storage.
   * @param note Note as Note model that needs to be added.
   * @returns void.
   */
  export function addNote(note: Note): void {
    const storageData = localStorage.getItem("notes");
    if (storageData === null) return;

    let parsedData: NoteDto[] = JSON.parse(storageData);
    parsedData.push(NoteMapper.toDto(note));

    localStorage.setItem("notes", JSON.stringify(parsedData));
  }

  /**
   * Edit note in local storage.
   * @param note Note as Note model that needs to be changed.
   * @returns void.
   */
  export function editNote(note: Note): void {
    const storageData = localStorage.getItem("notes");
    if (storageData === null) return;

    let parsedData: NoteDto[] = JSON.parse(storageData);
    for (let i = 0; i < parsedData.length; i++) {
      if (parsedData[i].id === note.id) {
        parsedData[i] = NoteMapper.toDto(note);
      }
    }

    localStorage.setItem("notes", JSON.stringify(parsedData));
  }
}

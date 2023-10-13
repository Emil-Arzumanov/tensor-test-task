import { Note } from 'types/models/NoteList';
import React from 'react';

export enum sortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export interface IGlobalContext {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>,

  note: Note | null,
  setNote: React.Dispatch<React.SetStateAction<Note | null>>,

  noteHeading: string,
  setNoteHeading: React.Dispatch<React.SetStateAction<string>>,

  noteText: string,
  setNoteText: React.Dispatch<React.SetStateAction<string>>,

  editMode: boolean,
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>,

  createMode: boolean,
  setCreateMode: React.Dispatch<React.SetStateAction<boolean>>,

  currentSearch: string | null,
  setCurrentSearch: React.Dispatch<React.SetStateAction<string | null>>,

  currentSort: sortDirection | null,
  setCurrentSort: React.Dispatch<React.SetStateAction<sortDirection | null>>,
};

interface IProps {
  children: React.ReactNode;
}

export const GlobalContext = React.createContext<IGlobalContext | null>(null);

export const GlobalContextProvider = ({children}: IProps) => {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [note, setNote] = React.useState<Note | null>(null);
  const [noteHeading, setNoteHeading] = React.useState<string>('');
  const [noteText, setNoteText] = React.useState<string>('');
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [createMode, setCreateMode] = React.useState<boolean>(false);
  const [currentSearch, setCurrentSearch] = React.useState<string | null>(null);
  const [currentSort, setCurrentSort] = React.useState<sortDirection | null>(null);

  return <GlobalContext.Provider value={{
    notes, setNotes,
    note, setNote,
    noteHeading, setNoteHeading,
    noteText, setNoteText,
    editMode, setEditMode,
    createMode, setCreateMode,
    currentSearch, setCurrentSearch,
    currentSort, setCurrentSort,
  }}>{children}</GlobalContext.Provider>;
};

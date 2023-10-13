import { GlobalContextProvider } from "state/GlobalContext";
import { NoteDetails } from "components/NoteDetails";
import { NoteSidebar } from "components/NoteSidebar";
import styles from "./App.module.css";
import { FC } from "react";


export const App: FC = () => {
  

  return (
    <GlobalContextProvider>
      <main className={styles.pageLayout}>
        <NoteSidebar/>
        <NoteDetails/>
      </main>
    </GlobalContextProvider>
  );
}

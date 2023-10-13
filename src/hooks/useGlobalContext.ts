import { GlobalContext, IGlobalContext } from "state/GlobalContext";
import { useContext } from "react";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext) as IGlobalContext;
  return context;
};

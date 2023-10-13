import { GlobalContext, IGlobalContext } from "state/GlobalContext";
import { useContext } from "react";

/**
 * Wraps useContext end returns context, so that we won't have to import
 * GlobalContext and IGlobalContext everywhere and repeat same typecasting
 * logic in every component.
 */
export const useGlobalContext = () => {
  const context = useContext(GlobalContext) as IGlobalContext;
  return context;
};

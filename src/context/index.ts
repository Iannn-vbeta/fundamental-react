import { createContext } from "react";

interface GlobalContextType {
  user: string | null;
}

export const GlobalContext = createContext<GlobalContextType>({
  user: null,
});
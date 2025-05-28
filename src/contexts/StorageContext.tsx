import React, { createContext, useContext, useMemo, useState } from "react";
import type { Theme } from "./ThemeContext";

export interface IStorage {
  get: (key: string) => string | null;
  set: (key: string, value: string) => void;
  remove: (key: string) => void;
}

class LocalStorage implements IStorage {
  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

interface IStorageContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const defaultStorageContext: IStorageContext = {
  theme: "light",
  setTheme: () => {},
};

const StorageContext = createContext(defaultStorageContext);

export function StorageProvider({ children }: { children: React.ReactNode }) {
  const storage: IStorage = useMemo(() => new LocalStorage(), []);

  const [theme, _setTheme] = useState<Theme>(
    (storage.get("theme") as Theme) ?? "light"
  );
  const setTheme = (theme: Theme) => {
    storage.set("theme", theme);
    _setTheme(theme);
  };

  return (
    <StorageContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useStorage() {
  return useContext(StorageContext);
}

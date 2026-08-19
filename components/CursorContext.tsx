"use client";

import { createContext, useContext, useState } from "react";

type CursorVariant = "default" | "nav";

const CursorContext = createContext<{
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
  active: boolean;
  setActive: (v: boolean) => void;
}>({
  variant: "default",
  setVariant: () => {},
  active: false,
  setActive: () => {},
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [active, setActive] = useState(false);

  return (
    <CursorContext.Provider value={{ variant, setVariant, active, setActive }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
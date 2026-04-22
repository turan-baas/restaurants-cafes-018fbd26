"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <>{children}</>;
}

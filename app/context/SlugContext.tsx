"use client";
import { createContext, useContext, PropsWithChildren } from "react";

export const SlugContext = createContext<string | null>(null);

export function SlugProvider({ slug, children }: PropsWithChildren<{ slug: string }>) {
  return <SlugContext.Provider value={slug}>{children}</SlugContext.Provider>;
}

export function useSlug() {
  return useContext(SlugContext);
}


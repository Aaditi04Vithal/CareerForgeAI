"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemesProps } from "next-themes";

interface ThemeProviderProps extends NextThemesProps {
  children: React.ReactNode; // <- explicitly type children
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
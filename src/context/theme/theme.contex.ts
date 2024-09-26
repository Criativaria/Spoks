import { createContext } from "react"
import { ThemeData } from "../../styles/theme"

export type ThemeContext = {
    theme: ThemeData,
}

export const ThemeContext = createContext<ThemeContext | undefined>(undefined)
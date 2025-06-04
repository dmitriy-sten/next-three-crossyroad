import { create } from "zustand";
import { generateRows } from "../utils/generate-rows";
import type { Row } from "../types";

interface StoreState {
    rows: Row[],
    addRows: () => void
}


export const useStore = create<StoreState>((set) => ({
    rows: generateRows(20),
    addRows: () => {
        const newRows = generateRows(20)
        set((state) => ({ rows: [...state.rows, ...newRows] }))
    }
}))


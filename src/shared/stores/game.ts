import { create } from "zustand";
import { generateRows } from "../utils/generate-rows";
import type { Row } from "../types";

interface StoreState {
    score: number,
    updateScore: (rowIndex: number) => void
}


export const useGameStore = create<StoreState>((set) => ({
    score: 0,
    updateScore: (rowIndex: number) => {
        set((state) => ({ score: Math.max(rowIndex, state.score) }))
    }
}))


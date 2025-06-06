import { create } from "zustand";
import { reset as resetPlayerStore } from './player'
import { useStore } from "./map";


interface StoreState {
    status: "running" | "over"
    score: number,
    updateScore: (rowIndex: number) => void
    endGame: () => void,
    reset: () => void
}


export const useGameStore = create<StoreState>((set) => ({
    status: 'running',
    score: 0,
    updateScore: (rowIndex: number) => {
        set((state) => ({ score: Math.max(rowIndex, state.score) }))
    },

    endGame() {
        set({ status: 'over' })
    },


    reset() {
        useStore.getState().reset()
        resetPlayerStore();
        set({ status: 'running', score: 0 })
    },
}))


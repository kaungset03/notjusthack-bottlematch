import { create } from "zustand";
interface GameState {
  numberOfPlayers: number;
  setNumberOfPlayers: (numberOfPlayers: number) => void;
  numberOfBottles: number;
  setNumberOfBottles: (numberOfBottles: number) => void;
}

const useGameStore = create<GameState>((set) => ({
  numberOfPlayers: 3,
  setNumberOfPlayers: (numberOfPlayers) => set({ numberOfPlayers }),
  numberOfBottles: 5,
  setNumberOfBottles: (numberOfBottles) => set({ numberOfBottles }),
}));

export default useGameStore;

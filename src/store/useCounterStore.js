import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useCounterStore = create(
  persist(
    set => ({
      count: 0,
      increment: value => set(({ count }) => ({ count: count + value })),
      decrement: () => set(({ count }) => ({ count: count - 1 })),
      reset: () => set(() => ({ count: 0 })),
      // asyns
      incrementAsync: async () => {}
    }),
    {
      name: 'counter',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

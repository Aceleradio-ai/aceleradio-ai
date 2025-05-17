import { Music } from "../types/types"

export const fetchMusics = async (): Promise<Music[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Calmo', uri: undefined },
        { id: 2, title: 'Moderado', uri: undefined },
        { id: 3, title: 'Agressivo', uri: undefined },
      ])
    }, 1000)
  })
};

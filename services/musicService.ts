import { Music } from "../types/types"

export const fetchMusics = async (): Promise<Music[]> => {
  return new Promise(resolve => {
    console.log("Nada!")
    setTimeout(() => {

    }, 1000)
  })
}
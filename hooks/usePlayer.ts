import { useEffect, useRef, useState } from "react"
import { Music } from "../types/types"
import { useAudioPlayer } from 'expo-audio';
import { fetchMusics } from "../services/musicService"

export const usePlayer = () => {
  const [ musics, setMusics ]       = useState<Music[] | null>(null)
  const [ selected, setSelected ]   = useState<Music | null>(null)
  const [ isPlaying, setIsPlaying ] = useState(false)

  useEffect(() => {
    fetchMusics().then(data => setMusics(data))
  }, [])

  const player = useAudioPlayer(selected?.uri ?? undefined)
}
export type Music = {
  id: number
  title: string
  uri: string | undefined
}

export type DrivingModeT = "sad" | "happy" | "angry"

export interface DrivingData {
  speed: number
  drivingMode: DrivingModeT 
}
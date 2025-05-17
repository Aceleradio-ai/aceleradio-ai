export type Music = {
  id: number
  title: string
  uri: string | undefined
}

export type DrivingModeT = "calmo" | "moderado" | "agressivo"

export interface DrivingData {
  speed: number
  drivingMode: DrivingModeT 
}
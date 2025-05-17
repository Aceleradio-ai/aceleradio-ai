export type Music = {
  id: number
  title: string
  uri: string
}

export type DrivingMode = "calmo" | "moderado" | "agressivo"

export interface DrivingData {
  speed: number
  drivingMode: DrivingMode 
}
export type Music = {
  id: number
  title: string
  uri: string | undefined
}

export type DrivingModeT = "calm" | "moderate" | "aggressive"

export interface DrivingData {
  speed: number
  drivingMode: DrivingModeT 
}
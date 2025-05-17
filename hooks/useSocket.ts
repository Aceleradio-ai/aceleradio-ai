import { useState } from "react"
import { DrivingModeT } from "../types/types"

export const useDrivingData = () => {
  const [ speed, setSpeed ] = useState(0)
  const [ drivingMode, setDrivingMode ] = useState<DrivingModeT>("calm")

  return { speed, drivingMode }
}
import { useState } from "react"
import { DrivingMode } from "../types/types"

export const useDrivingData = () => {
  const [ speed, setSpeed ] = useState(0)
  const [ drivingMode, setDrivingMode ] = useState<DrivingMode>("calmo")

  return { speed, drivingMode }
}
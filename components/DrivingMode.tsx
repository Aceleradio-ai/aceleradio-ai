import { View, Text } from "react-native"
import { useState } from "react"
import { DrivingModeT } from "../types/types"
import { fetchMusics } from "../services/musicService"

export const DrivingMode = () => {
  const [drivingMode, setDrivingMode] = useState<DrivingModeT>("calmo")

  const handleDrivingMode = (mode: DrivingModeT) => {
    setDrivingMode(mode)
  }

  fetchMusics().then(musics => {
    console.log(musics)
  })

  return (
    <View>
      <Text>
        Modo de condução: {drivingMode}
      </Text>
    </View>
  )
}
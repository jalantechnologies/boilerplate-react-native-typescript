import { ViewStyle, TextStyle, Dimensions } from "react-native"
import { spacing, typography, color } from "../../theme"

// the base styling for the container
export const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
}

// the base styling for the TextInput
export const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.palette.black,
  minHeight: 44,
  fontSize: 18,
  backgroundColor: color.palette.white,
  width: Dimensions.get('screen').width/2,
  padding: 5
}

// currently we have no presets, but that changes quickly when you build your app.
export const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}
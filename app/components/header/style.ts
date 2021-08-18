import {TextStyle, ViewStyle} from 'react-native'
import {spacing} from '@theme'

export const ROOT: ViewStyle = {
  flexDirection: 'row',
  paddingHorizontal: spacing[4],
  alignItems: 'center',
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: 'flex-start',
}
export const TITLE: TextStyle = {
  textAlign: 'center',
  fontSize: 30,
  fontWeight: '700',
  color: '#000',
}

export const TITLE_MIDDLE: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
}

export const LEFT: ViewStyle = {width: 32}
export const RIGHT: ViewStyle = {width: 32}

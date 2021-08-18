import {translate} from 'i18n-js'
import React from 'react'
import {Text} from 'react-native'
import {ErrorProps} from './props'
import {styles} from './style'

export function Error({tx, error, txOptions}: ErrorProps) {
  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || error

  return <Text style={styles.text}>{content}</Text>
}

import React, {FC} from 'react'
import {Image, View} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {Button, Header, Text, Screen} from '@components'
import {NavigatorParamList} from '@navigators'
import {color} from '@theme'
import {Images} from '@assets'
import {
  FULL,
  CONTAINER,
  HEADER,
  HEADER_TITLE,
  TITLE,
  TAGLINE,
  DEMO,
  DEMO_TEXT,
  LOGO,
} from './style'

export const DemoScreen: FC<StackScreenProps<NavigatorParamList, 'demo'>> = ({
  navigation,
}) => {
  const goBack = () => navigation.goBack()

  return (
    <View testID="DemoScreen" style={FULL}>
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}>
        <Header
          headerTx="demoScreen.howTo"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <Text style={TITLE} preset="header" tx="demoScreen.title" />
        <Text style={TAGLINE} tx="demoScreen.tagLine" />
        <Button style={DEMO} textStyle={DEMO_TEXT} tx="demoScreen.demoList" />
        <Image source={Images.LOGO} style={LOGO} />
      </Screen>
    </View>
  )
}

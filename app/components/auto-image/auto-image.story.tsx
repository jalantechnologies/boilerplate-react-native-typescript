/* eslint-disable */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { AutoImage } from "./auto-image"

declare let module

import { Images } from "../../../assets"

storiesOf("AutoImage", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="With require()">
        <AutoImage source={Images.ICON} />
        <AutoImage source={Images.ICON} style={{ width: 150 }} />
        <AutoImage source={Images.ICON} style={{ width: 150, height: 150 }} />
        <AutoImage source={Images.ICON} style={{ height: 150 }} />
        <AutoImage source={Images.ICON} style={{ height: 150, resizeMode: "contain" }} />
      </UseCase>
      <UseCase text="With URL">
        <AutoImage source={Images.ICON} />
        <AutoImage source={Images.ICON} style={{ width: 150 }} />
        <AutoImage source={Images.ICON} style={{ width: 150, height: 150 }} />
        <AutoImage source={Images.ICON} style={{ height: 150 }} />
        <AutoImage source={Images.ICON} style={{ height: 150, resizeMode: "contain" }} />
      </UseCase>
    </Story>
  ))

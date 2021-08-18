import { StyleProp, TextProps as TextProperties, TextStyle } from "react-native"
import { TxKeyPath } from "../../i18n";
import i18n from "i18n-js"
import { FormikErrors } from "formik";

export interface ErrorProps extends TextProperties {
  children?: React.ReactNode
  tx?: TxKeyPath
  txOptions?: i18n.TranslateOptions
  error?: string
  style?: StyleProp<TextStyle>
}

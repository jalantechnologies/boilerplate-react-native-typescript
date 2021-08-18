import * as yup from 'yup'

export const validateLoginSchema = yup.object({
  email: yup.string().required().email().min(4),
  password: yup.string().required().min(8),
})

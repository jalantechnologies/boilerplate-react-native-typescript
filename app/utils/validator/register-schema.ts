import * as yup from 'yup'

export const validateRegisterSchema = yup.object({
  email: yup.string().required().email().min(4),
  password: yup.string().required().min(8),
})

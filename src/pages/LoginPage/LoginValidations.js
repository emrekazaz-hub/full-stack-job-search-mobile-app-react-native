import { object, string, ref } from 'yup';

const LoginValidations = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(5).required(),
  checkPassword: string().oneOf([ref("password")]).required(),
});

export default LoginValidations;

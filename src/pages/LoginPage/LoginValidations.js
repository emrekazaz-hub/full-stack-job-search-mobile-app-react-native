import { object, string } from 'yup';

const LoginValidations = object({
  email: string().email().required(),
  password: string().required(),
});

export default LoginValidations;

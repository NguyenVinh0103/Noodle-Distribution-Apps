import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  // email: Yup.string().email('Invalid email').required('Required'),
  // password: Yup.string().email('Invalid password').required('Required'),
});

import * as yup from "yup";
import { IFormLogin } from "../../componets/FormLogin/FormLogin";

const regexPassword = /^(?=.*[a-zA-Z])(?=.*[$%&_#])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const LoginSchema: yup.ObjectSchema<IFormLogin> = yup.object({
  email: yup
    .string()
    .email("Это должна быть почта формата name@mail.ru")
    .required("Это поле обязательное"),
  password: yup
    .string()
    .required("Это поле обязательное")
    .min(8, "Минимум 8 символов")
    .matches(
      regexPassword,
      "Неверный email или пароль. Попробуйте ещё раз или восстановите пароль"
    ),
});

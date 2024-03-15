import {Typography, Box } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import InputFields from "./InputFields/InputFields";
import { LoginSchema } from "../../shared/ValidationSchema/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFormLogin {
  email: string;
  password: string;
}

export default function FormLogin() {
  const methods = useForm<IFormLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputFields />
        <Typography
          color="white"
          sx={{ paddingTop: "32px", paddingBottom: "50px" }}
        >
          Забыли пароль?
        </Typography>
      </Box>
    </FormProvider>
  );
}

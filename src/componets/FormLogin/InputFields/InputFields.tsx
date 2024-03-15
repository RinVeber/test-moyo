import { Box, FormHelperText, Stack } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { InputCustom } from "../../../shared/UI/Input/InputCustom";
import { ButtonLogin } from "../../../shared/UI/Button/ButtonCustom";
import { IFormLogin } from "../FormLogin";

export default function InputFields() {
  const {
    control,
    formState: { errors, isValid },
  } = useFormContext<IFormLogin>();

  return (
    <Stack
      display="flex"
      flexDirection="column"
      gap="24px"
      width="100%"
      justifyContent={"space-between"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field: { ...fieldsProps } }) => (
            <>
              <InputCustom
                placeholder="Email"
                fullWidth
                {...fieldsProps}
                error={!!errors.email}
              />
              <FormHelperText error={!!errors.email}>
                {errors.email?.message}
              </FormHelperText>
            </>
          )}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Controller
          name="password"
          control={control}
          render={({ field: { ...fieldsProps } }) => (
            <>
              <InputCustom
                placeholder="Password"
                fullWidth
                {...fieldsProps}
                error={!!errors.password}
              />
              <FormHelperText error={!!errors.password}>
                {errors.password?.message}
              </FormHelperText>
            </>
          )}
        />
      </Box>

      <ButtonLogin disabled={!isValid} type="submit">
        Войти
      </ButtonLogin>
    </Stack>
  );
}

import React from "react";
import { Box, FormHelperText, InputAdornment, Stack } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { InputCustom } from "../../../shared/UI/Input/InputCustom";
import { ButtonLogin } from "../../../shared/UI/Button/ButtonCustom";
import { IFormLogin } from "../FormLogin";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export default function InputFields() {
  const {
    control,
    formState: { errors, isValid },
  } = useFormContext<IFormLogin>();

  const [showPassword, setShowPassword] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                placeholder="Пароль"
                type={showPassword ? "password" : "text"}
                fullWidth
                {...fieldsProps}
                error={!!errors.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {!showPassword ? (
                        <VisibilityOutlined sx={{ color: "white" }} />
                      ) : (
                        <VisibilityOffOutlined sx={{ color: "white" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
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

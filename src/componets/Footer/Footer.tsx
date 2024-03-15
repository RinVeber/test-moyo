import { Box, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ margin: "0 auto", paddingBottom: "50px" }}>
      <Stack
        maxWidth={"178px"}
        display="flex"
        flexDirection="column"
        gap="4px"
        alignContent={"center"}
        alignItems={"center"}
        sx={{ fontWeight: "400", fontSize: "14px" }}
      >
        <Typography color="#FFFFFF80">Еще нет аккаунта?</Typography>
        <Typography color="#FFFFFF" sx={{ cursor: "pointer" }}>
          Зарегистрироваться
        </Typography>
      </Stack>
    </Box>
  );
}

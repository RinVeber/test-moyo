import { Box, Stack } from "@mui/material";
import primaryLogo from "../../assets/primaryLogo.svg";
import vk from "../../assets/vk.svg";
import google from "../../assets/google.svg";
import yandex from "../../assets/yandex.svg";
import FormLogin from "../../componets/FormLogin/FormLogin";

export default function LoginPage() {
  return (
    <Box
      component="main"
      sx={{
        maxWidth: "368px",
        width: "100%",
        height: "449px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "335px",
          maxWidth: "368px",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={primaryLogo}
          alt="логотип"
          sx={{ width: "196px", height: "53px", paddingBottom: "50px" }}
        />
        <FormLogin />
        <Stack display="flex" flexDirection="row" gap="14px">
          <Box component={"img"} src={vk} alt="vk-icon" />
          <Box component={"img"} src={google} alt="google-icon" />
          <Box component={"img"} src={yandex} alt="yandex-icon" />
        </Stack>
      </Box>
    </Box>
  );
}

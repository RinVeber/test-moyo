import { Box, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo_header.svg";
import loop from "../../assets/loop-icon.svg";
import icon from "../../assets/icon-geo.svg";
import avatar from "../../assets/avatar.svg";
import { ButtonHeader } from "../../shared/UI/Button/ButtonCustom";

export default function Header() {
  const isMobile = useMediaQuery<Theme>(`(min-width: 768px)`);

  return (
    <Box
      component="header"
      sx={{
        height: "64px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "14px 30px",
        alignItems: "center",
      }}
    >
      <Stack display={"flex"} flexDirection={"row"} gap="25px">
        <Box
          component={"img"}
          src={menu}
          alt="menu"
          sx={{ width: "30px", height: "30px" }}
        />
        {isMobile && (
          <Box
            component={"img"}
            src={logo}
            alt="logo moyo"
            sx={{ width: "89px", height: "24px" }}
          />
        )}
      </Stack>

      {!isMobile && (
        <Box
          component={"img"}
          src={logo}
          alt="logo moyo"
          sx={{ width: "89px", height: "24px" }}
        />
      )}

      {isMobile && (
        <Box
          sx={{
            maxWidth: "446px",
            width: "100%",
            height: "36px",
            backgroundColor: "#FFFFFF0D",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "6px 10px",
          }}
        >
          <Stack display={"flex"} flexDirection={"row"} gap="10px">
            <Box component={"img"} src={loop} alt="иконка" />
            <Typography
              sx={{ color: "#FFFFFF80", fontWeight: "400", fontSize: "16px" }}
            >
              Поиск
            </Typography>
          </Stack>
        </Box>
      )}

      {!isMobile && <Box component="img" src={avatar} alt="avatar" />}

      {isMobile && (
        <Stack
          display={"flex"}
          flexDirection={"row"}
          gap="50px"
          alignItems={"center"}
        >
          <Stack
            display={"flex"}
            flexDirection={"row"}
            gap="10px"
            alignItems={"center"}
          >
            <Box
              component={"img"}
              src={icon}
              alt="icon"
              sx={{ width: "14px", height: "14px" }}
            />
            <Typography
              sx={{ fontSize: "14px", color: "#FFFFFF", fontWeight: "400" }}
            >
              Санкт-Питербурк
            </Typography>
          </Stack>

          <ButtonHeader
            sx={{ fontSize: "14px", fontWeight: "500", lineHeight: "17px" }}
          >
            Войти
          </ButtonHeader>
        </Stack>
      )}
    </Box>
  );
}

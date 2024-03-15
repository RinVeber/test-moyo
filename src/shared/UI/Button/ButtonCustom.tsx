import { Button, ButtonProps, styled } from "@mui/material";

export const ButtonHeader = styled(Button)<ButtonProps>(() => ({
  color: "#FFFFFF",
  padding: '10px 20px',
  width: "97px",
  height: "37px",
  borderRadius: "6px",
  backgroundColor: "#FFFFFF33",
  "&:hover": {
    backgroundColor: "#FFFFFF33",
  },
}));

export const ButtonLogin = styled(Button)<ButtonProps>(() => ({
  color: "#000000",
  padding: '10px 20px',
  width: "100%",
  height: "48px",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFFFFF56",
    color: '#FFFFFF'
  },
  "&:disabled": {
    backgroundColor: "#FFFFFF33",
    color: "#000000",
  }
}));

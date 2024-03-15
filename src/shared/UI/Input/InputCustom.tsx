import { Input, InputProps, styled } from "@mui/material";

export const InputCustom = styled(Input)<InputProps>(() => ({
  color: "#FFFFFF",
  padding: "10px 20px",
  width: "100%",
  height: "50px",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF0D",
  "&:hover": {
    backgroundColor: "#FFFFFF33",
  },
  "&:after": {
    borderBottom: "none",
  },

  "&.Mui-error": {
    border: "2px solid #BF4C4C",

    "&:after": {
      borderBottom: "none",
    },
    "&::before": {
      borderBottom: "none",
    },
  },
}));

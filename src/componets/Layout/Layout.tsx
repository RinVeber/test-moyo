import { styled } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const BackgroundLayout = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: "#101113",
}));

export default function Layout() {
  return (
    <BackgroundLayout>
      <Header />
      <Outlet />
      <Footer />
    </BackgroundLayout>
  );
}

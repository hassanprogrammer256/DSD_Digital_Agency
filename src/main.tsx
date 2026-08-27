import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { joyTheme } from "@/theme/joyTheme";
import { router } from "@/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider theme={joyTheme} defaultMode="light" disableTransitionOnChange>
      <CssBaseline />
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={5000} />
    </CssVarsProvider>
  </StrictMode>,
);

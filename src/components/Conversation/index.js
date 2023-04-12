import { useTheme } from "@emotion/react";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Conversation() {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <Box flexGrow={1}></Box>
      <Footer />
    </Stack>
  );
}

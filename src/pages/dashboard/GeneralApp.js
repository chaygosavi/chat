import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      {/* <Conversation/> */}
      <Box flexGrow={1} bgcolor={"#fff"}>
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;

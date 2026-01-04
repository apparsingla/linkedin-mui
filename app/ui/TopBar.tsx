"use client";

import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

export default function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          LinkedIn
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Avatar alt="User" />
      </Toolbar>
    </AppBar>
  );
}

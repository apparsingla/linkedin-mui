"use client";

import { Card, CardContent, Avatar, Typography, Stack } from "@mui/material";

export default function LeftSidebar() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Avatar />
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Frontend Developer | React | Next.js
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

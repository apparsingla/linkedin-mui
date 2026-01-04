"use client";

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Button,
} from "@mui/material";

function Suggestion() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar />
      <Stack>
        <Typography variant="body1">Alex Johnson</Typography>
        <Button size="small">Follow</Button>
      </Stack>
    </Stack>
  );
}

export default function RightSidebar() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="subtitle1">Add to your feed</Typography>
          <Suggestion />
          <Suggestion />
          <Suggestion />
        </Stack>
      </CardContent>
    </Card>
  );
}

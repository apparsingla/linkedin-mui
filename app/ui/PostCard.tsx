"use client";

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Button,
} from "@mui/material";

export default function PostCard() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          {/* Header */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar />
            <Typography variant="subtitle1">Jane Smith</Typography>
          </Stack>

          {/* Content */}
          <Typography variant="body1">
            Excited to share that I am learning MUI with Next.js!
          </Typography>

          {/* Actions */}
          <Stack direction="row" spacing={2}>
            <Button size="small">Like</Button>
            <Button size="small">Comment</Button>
            <Button size="small">Share</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

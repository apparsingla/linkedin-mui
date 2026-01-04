"use client";

import { Stack } from "@mui/material";
import PostCard from "./PostCard";

export default function Feed() {
  return (
    <Stack spacing={2}>
      <PostCard />
      <PostCard />
      <PostCard />
    </Stack>
  );
}

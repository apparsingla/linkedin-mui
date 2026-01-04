import { Container, Grid, Box } from "@mui/material";
import TopBar from "./ui/TopBar";
import LeftSidebar from "./ui/LeftSidebar";
import Feed from "./ui/Feed";
import RightSidebar from "./ui/RightSidebar";

export default function Home() {
  return (
    <Box>
      <TopBar />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <LeftSidebar />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Feed />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

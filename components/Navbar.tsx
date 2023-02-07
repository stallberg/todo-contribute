import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => (
  <Box>
    <AppBar>
      <Toolbar>
        <Container>
          <Typography variant="h5" component="h1">
            My Little Todo App
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </Box>
);

export default Navbar;
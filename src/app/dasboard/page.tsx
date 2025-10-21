"use client";

import DashboardMenu from "@/UI/componen-administrator/dasboard-menu";
import { Typography, Box, } from "@mui/material";

export default function DasboardPage() {

  return (
    <DashboardMenu>
      <Box>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Welcome back! Here's what's happening with your store today.
        </Typography>
      </Box>
    </DashboardMenu>
  );
}
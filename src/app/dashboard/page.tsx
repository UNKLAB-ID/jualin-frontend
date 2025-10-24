"use client";

import DashboardMenu from "@/UI/componen-administrator/dashboard-menu";
import { Typography, Box, } from "@mui/material";

export default function DasboardPage() {

  return (
    <DashboardMenu>
      <Box>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Dashboard Overview
        </Typography>
      </Box>
    </DashboardMenu>
  );
}
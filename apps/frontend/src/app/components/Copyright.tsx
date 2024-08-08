import React from "react";
import { Link, Typography } from "@mui/material";

export const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'© '}
      {new Date().getFullYear()}
      {'.  '}
      <Link color="inherit" href="https://vgec-rocketry-space.vercel.app/home">
         VGEC ROCKETRY TEAM. ALL RIGHTS RESERVED  
      </Link>{' '}
    </Typography>
  );
}

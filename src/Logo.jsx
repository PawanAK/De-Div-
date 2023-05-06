import React from "react";
import { Box, Typography } from "@mui/material";
import logoImage from "./logo.png"; // Import the image here
import "./Logo.css";

const Logo = ({ connected }) => {
  return (
    <Box className={`logo ${connected ? "logo--connected" : ""}`}>
      <div className=".logo__wrapper">
        <img src={logoImage} alt="logo" className="logo__image" />
      </div>
      <Typography variant="h6" className="logo__text">
        {"De\u003C" + "Div/\u003E"}
      </Typography>
    </Box>
  );
};

export default Logo;

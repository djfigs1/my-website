import { Box } from "@mui/material";
import React from "react";
import "./Banner.css"

const Banner: React.FC = ({}) => {
    return <Box>
        <img style={{width: "100%", objectFit: "cover"}} src="/banner.jpg" />
    </Box>
}

export default Banner;
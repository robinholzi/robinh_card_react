import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="text.secondary" align="center" fontSize={20}>
        {'Copyright © '}
        <a href="https://www.linkedin.com/in/robin-holzinger/" 
          style={{ textDecoration: 'none', color: "white" }}>
          Robin Holzinger
        </a>{' '}
        <span style={{ marginRight: "16px" }}>{new Date().getFullYear()}</span>{"|"}
        <a href="/imprint/"
          style={{ textDecoration: 'none', color: "white", marginLeft: "16px" }}>
          Imprint
        </a>
      </Typography>
    </div>
  );
}

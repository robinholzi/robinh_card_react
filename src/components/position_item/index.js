import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { color_link, color_bg_dark } from "../../theme/colors.ts";


export function PositionItem({position, company, link}) {

  return (
    <>
      <Box pt={0.8} pb={0.8}>
        <Typography variant="body2" align="center" color={color_bg_dark} fontWeight={500} fontSize={21}>
          {position}
          <a href={link}
            style={{ textDecoration: 'none', color: color_link, marginLeft: "16px", fontWeight: 600 }}>
            <span style={{ marginRight: "16px" }}>@</span>
            <span>{company}</span>
          </a>
        </Typography>
      </Box>
    </>
  );

}

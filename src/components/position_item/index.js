import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { color_link, color_bg_dark, color_link_darker, color_text_dark } from "../../theme/colors.ts";


export function PositionItem({position, company, link}) {

  return (
    <>
      <Box pt={0.8} pb={0.8}>
        <Typography variant="body2" align="center" color={color_bg_dark} fontWeight={500} fontSize={21}>
          {position}
          <a href={link} target="_blank"
            style={{ textDecoration: 'none', color: color_link, marginLeft: "16px", fontWeight: 600 }}>
            <span style={{ marginRight: "16px" }}>@</span>
            <span>{company}</span>
          </a>
        </Typography>
      </Box>
    </>
  );

}


export function PositionItemAward({position, pre_text, post_text, link}) {

  return (
    <>
      <Box pt={0.3} pb={0.3}>
        <Typography variant="body2" align="center" color={color_text_dark} fontWeight={500} fontSize={18}>
          {pre_text} { (link != null) ? (
            <a href={link} target="_blank"
              style={{ textDecoration: 'none', color: color_link, fontWeight: 600 }}>
              <span>{position}</span>
            </a>
          ) : ({position})
        } {post_text}
        </Typography>
      </Box>
    </>
  );

}

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { color_link, color_bg_dark } from "../../theme/colors.ts";

export function ContactItem({name, detail, link, detail2=null, link2=null, extended=false}) {

  const has2 = detail2 && link2;

  return (
    <>
      <Box pt={0.8} pb={ has2 ? 0 : 0.8 } ml={10}>
        <Typography variant="body2" align="left" color={color_bg_dark} 
          fontWeight={500} fontSize={19}
        >
          <Box component="span" sx={{ display: "inline-block", width: extended ? "160px" : "90px" }}>
            {name}
          </Box>
          <a href={link}
            style={{ textDecoration: 'none', color: color_link, marginLeft: "16px", 
              fontWeight: 500, fontSize: 18 }}>
            <span>{detail}</span>
          </a>
        </Typography>
      </Box>
      {
        has2 ? (<>
          <Box pt={0.8} pb={0.8} ml={10}>
            <Typography variant="body2" align="left" color={color_bg_dark} 
              fontWeight={500} fontSize={19}
            >
              <Box component="span" sx={{ display: "inline-block", width: extended ? "160px" : "90px" }}></Box>
              <a href={link2}
                style={{ textDecoration: 'none', color: color_link, marginLeft: "16px", 
                  fontWeight: 500, fontSize: 18 }}>
                <span>{detail2}</span>
              </a>
            </Typography>
          </Box>
        </>) : ""
      }
    </>
  )

}


import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SocialIcon } from "react-social-icons";

function SocialWrapper({url}) {
  return (
    <SocialIcon url={url} style={{marginLeft: 10, marginRight: 10}} />
  );
}

export function SocialFooter({position, link}) {

  return (
    <>
      <Box pt={0.3} pb={0.3}>
        <center>
          <SocialWrapper url="https://www.linkedin.com/in/robin-holzinger/" />
          <SocialWrapper url="https://github.com/nerotyc" />
          <SocialWrapper url="https://stackoverflow.com/users/7307260/nerotyc" />
        </center>
      </Box>
    </>
  );

}

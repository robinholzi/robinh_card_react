
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';
import Copyright from '../../components/copyright';
import { FooterWidget } from '../../components/FooterBar.js';
import { PositionItem } from '../../components/position_item';
import { ContactItem } from '../../components/contact_item';
import { color_bg_white, color_text_dark } from '../../theme/colors.ts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Fab } from '@mui/material';

export function ImprintPage() {
  
  const mediaMatch300 = window.matchMedia('(max-width: 300px)');
  const mediaMatch400 = window.matchMedia('(max-width: 400px)');
  const mediaMatch500 = window.matchMedia('(max-width: 500px)');
 
  return (
    <>
      <Box>
        <Fab color="secondary" aria-label="edit" style={{padding: 35, margin: 70}} onClick={
          () => window.location.replace("/")
        }>
          <ArrowBackIcon />
        </Fab>
        <Box 
          width="500px" marginLeft="auto" marginRight="auto"
          style={{
            transform: 'translate(-' + (
              (mediaMatch300.matches) ? '90' : (
                (mediaMatch400.matches) ? '65' : (
                  (mediaMatch500.matches) ? '22' : '0'
                )
              )
            ) + 'px,0)',
          }}
        >
          {/* <Paper elevation={3}> */}
          <Box 
            pb={6}
            bgcolor={color_bg_white}
            boxShadow={3}
            sx={{
              borderRadius: 7,
              overflow: "hidden",
              // boxShadow: 12,
            }}
            style={{
              boxShadow:
                "0px 0px 30px 0px rgba(0,0,0,0.7)"
            }}
          >
            {/* secondary.main */}
            <Box>
              <Box pt={4}>
                <Typography variant="h1" color="text.primary" align="center"
                  fontSize={36} fontWeight="500" letterSpacing={1}>
                    Imprint
                </Typography>
                <Typography variant="h2" color="text.primary" align="center" 
                  fontSize={30} fontWeight="500" letterSpacing={1} pt={2}>
                    Robin Holzinger
                </Typography>
              </Box>
              <Box pt={3}>
                <Box pl={10} pr={10} pt={4} pb={2}>
                  <Typography variant='h1' fontSize={38} fontWeight="500" color={color_text_dark}>Legal Disclosure</Typography>
                  <Typography fontSize={20} color={color_text_dark} pt={3}>
                    Information in accordance with Section 5 TMG
                    <br/><br/>Robin Holzinger<br/>Oberneureuth 17<br/>94164 Sonnen
                  </Typography>
                </Box>
              </Box>
              <Box pt={3}>
                <Box pl={10} pr={10} pb={2}>
                  <Typography variant='h2' fontSize={38} fontWeight="500" color={color_text_dark}>Contact Information</Typography>
                </Box>
                <ContactItem 
                  extended
                  name="Telephone"
                  detail="+49 174 9769452"
                  link=""
                />
                <ContactItem
                  extended 
                  name="Email"
                  detail="me@robinh.xyz"
                  link="mailto:me@robinh.xyz"
                />
                <ContactItem 
                  extended
                  name="Internet address"
                  detail="https://robinh.xyz/"
                  link="https://robinh.xyz/"
                />
              </Box>
              <Box pl={10} pr={10} pt={7}>
                <Typography variant='h2' fontSize={38} fontWeight="500" color={color_text_dark}>Disclaimer</Typography>
                <br/>
                <Typography fontSize={20} color={color_text_dark}>
                Accountability for content<br/>
                The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
                accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
                our own content on these web pages. In this matter, please note that we are not obliged to monitor
                the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
                Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per
                §§ 8 to 10 of the Telemedia Act (TMG).

                <br/><br/>Accountability for links<br/>
                Responsibility for the content of
                external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were
                evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective
                link immediately.<br/><br/>Copyright<br/> Our web pages and their contents are subject to German copyright law. Unless
                expressly permitted by law, every form of utilizing, reproducing or processing
                works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights.
                Individual reproductions of a work are only allowed for private use.
                The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.

                <br/><br/>
                <i>Source: </i><a href="http://www.translate-24h.de" target="_blank">impressum generator at translate-24h.de</a> <br/><br/>
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* </Paper> */}
        </Box>
      </Box>
    </>    
  )
}

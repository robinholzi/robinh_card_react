
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { color_bg_white } from '../../theme/colors.ts';
import { PositionItem, PositionItemAward } from '../../components/position_item';
import { SocialFooter } from '../../components/social_footer';


export function RootPage() {

  const BackgroundImage = styled(Box)`
    background-image: url(/img/background.jpeg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;
  
  const mediaMatch300 = window.matchMedia('(max-width: 300px)');
  const mediaMatch400 = window.matchMedia('(max-width: 400px)');
  const mediaMatch500 = window.matchMedia('(max-width: 500px)');

  return (
    <>
      <Box>
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
              <Box>
                <Box pb={0}>
                  <BackgroundImage height={200} />
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    mt={-11}
                  >

                    <Grid item xs={3}>
                      <Avatar
                        alt="Robin Holzinger"
                        src="/img/profile_picture_colored.jpg"
                        sx={{ width: 180, height: 180, border:"solid white 8px" }}
                      />
                    </Grid>   
                  </Grid> 
                </Box>
              </Box>
              <Box pt={3}>
                <Typography variant="h2" color="text.primary" align="center" 
                  fontSize={32} fontWeight="500" letterSpacing={1}>
                    Robin Holzinger
                </Typography>
              </Box>
              <Box pt={2}>
                <PositionItem 
                  position="CS Student"
                  company="TUM"
                  link="https://www.tum.de/en/"
                />
                <PositionItem 
                  position="SWE Intern"
                  company="QuantCo"
                  link="https://quantco.com"
                />
                <PositionItem 
                  position="SWE Working Student"
                  company="FINN"
                  link="https://www.finn.auto/"
                />
              </Box>
              <Box pt={2} alignItems={'center'}>
                <PositionItemAward 
                  // pre_text=""
                  position="best-in-tum"
                  post_text="(top 2% @ TUM)"
                  link="https://www.in.tum.de/en/in/current-students/advising-and-support/mentoring-and-support-programs/foerderprogramme-der-tum/promotion-of-outstanding-students/"
                />
                <Box height={15} />
                <PositionItem 
                  position="scholarships"
                />
                <Box height={5} />
                <PositionItemAward 
                  // pre_text=""
                  position="Max Weber Program"
                  link="https://www.elitenetzwerk.bayern.de/en/home/funding-programs/max-weber-program"
                />
                <PositionItemAward 
                  // pre_text=""
                  position="German Academic Scholarship Foundation"
                  link="https://www.studienstiftung.de/en/"
                />
                <PositionItemAward 
                  // pre_text=""
                  position="IT-Talents & Mathema GmbH"
                  link="https://it-talents.de/partnerunternehmen/it-stipendien/robin-erhaelt-ein-it-stipendium/"
                />
              </Box>
              <Box pt={3}>
                <SocialFooter />
              </Box>
            </Box>
          </Box>
          {/* </Paper> */}
        </Box>
      </Box>
    </>    
  )
}
